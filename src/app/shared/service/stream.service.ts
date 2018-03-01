import { Inject, Injectable } from '@angular/core';
import { MyUser, USER_INFO } from '../domain/auth.domain';
import { environment } from '../../../environments/environment';
import { MediaFile } from '../domain/media-file.domain';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { AUDIO_PROVIDER, AudioProvider } from '../provider/audio.provider';

@Injectable()
export class StreamService {
  set volume(it: number) {
    this._volume = it;
    this.audioProvider.volume = it;
  }
  get volume(): number {
    return this._volume;
  }
  private _volume = 1.0;
  private streamObserver = new Subject<MediaStream>();
  private currentMediaFile: MediaFile;
  private mediaQueue: Array<MediaFile> = [];
  private previousMediaQueue: Array<MediaFile> = [];

  constructor(@Inject(AUDIO_PROVIDER) private audioProvider: AudioProvider) {
    this.audioProvider.onEnded(() => {
      if (this.mediaQueue.length > 0) {
        this.previousMediaQueue.push(this.currentMediaFile);
        this.streamFile(this.mediaQueue.pop());
      } else {
        this.currentMediaFile = null;
        this.updateStream(false, null);
      }
    });
  }

  streamFile(mediaFile: MediaFile) {
    this.audioProvider.pause();
    const userInfo: MyUser = JSON.parse(localStorage.getItem(USER_INFO));
    const streamUrl = `${userInfo.server}/rest/stream?id=${mediaFile.id}&v=${environment.apiVersion}&u=${userInfo.name}&s=${userInfo.salt}&t=${userInfo.token}&c=${environment.applicationName}`;
    this.audioProvider.src = streamUrl;
    try {
      this.audioProvider.play();
      this.updateStream(true, mediaFile);
    } catch (e) {
      // Browser doesn't support what we are playing?
      console.log(e);
    }
  }

  addToQueue(mediaFiles: Array<MediaFile>) {
    const reversed = mediaFiles.slice().reverse();
    if (!this.currentMediaFile) {
      this.streamFile(reversed.pop());
    }
    this.mediaQueue.push(...reversed);
  }

  onStreamStart(fn: (mediaStream: MediaStream) => void): Subscription {
    return this.streamObserver.subscribe(fn);
  }

  pause() {
    this.audioProvider.pause();
    this.updateStream(false);
  }

  play() {
    if (this.currentMediaFile) {
      this.audioProvider.play();
      this.updateStream(true);
    }
  }

  next() {
    if (this.mediaQueue.length > 0) {
      this.previousMediaQueue.push(this.currentMediaFile);
      this.streamFile(this.mediaQueue.pop());
    }
  }

  previous() {
    if (this.currentMediaFile) {
      this.mediaQueue.push(this.currentMediaFile);
    }
    if (this.previousMediaQueue.length > 0) {
      this.streamFile(this.previousMediaQueue.pop());
    }
  }

  private updateStream(isPlaying: boolean, mediaFile?: MediaFile) {
    if (mediaFile) {
      this.currentMediaFile = mediaFile;
    }
    this.streamObserver.next({
      isPlaying: isPlaying,
      mediaFile: this.currentMediaFile
    });
  }
}

export interface MediaStream {
  isPlaying: boolean;
  mediaFile?: MediaFile;
}
