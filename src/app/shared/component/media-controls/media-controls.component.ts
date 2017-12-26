import { Component, OnInit } from '@angular/core';
import { MediaStream, StreamService } from '../../service/stream.service';
import { AlbumService } from '../../service/album.service';

@Component({
  selector: 'app-media-controls',
  templateUrl: './media-controls.component.html',
  styleUrls: ['./media-controls.component.scss']
})
export class MediaControlsComponent implements OnInit {
  stream: MediaStream;
  volume: number;
  muted: boolean = false;

  constructor(private streamService: StreamService) { }

  ngOnInit() {
    this.streamService.onStreamStart(stream => this.stream = stream);
    if (localStorage.getItem(VOLUME) === null) {
      this.volume = this.streamService.volume;
    } else {
      this.volume = Number(localStorage.getItem(VOLUME));
      this.volumeChange(this.volume);
    }
  }

  pause() {
    this.streamService.pause();
  }

  play() {
    this.streamService.play();
  }

  next() {
    this.streamService.next();
  }

  volumeChange(val) {
    if (val === 0) {
      this.muted = true;
    } else {
      this.muted = false;
    }
    this.streamService.volume = val;
  }

  volumeMute() {
    if (!this.muted) {
      localStorage.setItem(VOLUME, this.volume.toString());
      this.volumeChange(0);
      this.volume= 0;
    } else {
      this.volume = Number(localStorage.getItem(VOLUME));
      this.volumeChange(this.volume);
    }
  }

  previous() {
    this.streamService.previous();
  }

  albumImageUrl(albumImageSize) {
    if (this.stream) {
      return AlbumService.getAlbumImageUrl(this.stream.mediaFile.id, albumImageSize);
    }
    return '';
  }

}

export const VOLUME = 'volume';
