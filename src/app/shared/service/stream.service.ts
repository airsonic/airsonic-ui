import { Injectable } from '@angular/core';
import { User, USER_INFO } from './user.service';
import { environment } from '../../../environments/environment';
import { MediaFile } from '../domain/media-file.domain';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

declare let Audio: any;

@Injectable()
export class StreamService {
  private currentStream;
  private streamObserver = new Subject<MediaStream>();
  private currentMediaFile: MediaFile;

  constructor() {
    this.currentStream = new Audio();
    this.currentStream.addEventListener('ended', () =>
      this.streamObserver.next({
        isPlaying: false,
        mediaFile: this.currentMediaFile
      }));
  }

  streamFile(mediaFile: MediaFile) {
    console.log('Trying to stream song');
    this.currentStream.pause();
    const userInfo: User = JSON.parse(localStorage.getItem(USER_INFO));
    const streamUrl = `${userInfo.server}/rest/stream?id=${mediaFile.id}&v=1.15.0&u=${userInfo.name}&s=${userInfo.salt}&t=${userInfo.token}&c=${environment.applicationName}`;
    this.currentStream.src = streamUrl;
    try {
      this.currentStream.play();
      this.streamObserver.next({
        isPlaying: true,
        mediaFile: mediaFile
      });
      this.currentMediaFile = mediaFile;
    } catch (e) {
      // Browser doesn't support what we are playing?
      console.log(e);
    }
  }

  onStreamStart(fn: (mediaStream: MediaStream) => void): Subscription {
    return this.streamObserver.subscribe(fn);
  }

  pause() {
    this.currentStream.pause();
    this.streamObserver.next({
      isPlaying: false,
      mediaFile: this.currentMediaFile
    });
  }

  play() {
    if (this.currentMediaFile) {
      this.currentStream.play();
      this.streamObserver.next({
        isPlaying: true,
        mediaFile: this.currentMediaFile
      });
    }
  }
}

export interface MediaStream {
  isPlaying: boolean;
  mediaFile?: MediaFile;
}
