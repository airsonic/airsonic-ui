import { Component, OnInit } from '@angular/core';
import { MediaStream, StreamService } from '../../service/stream.service';
import { AlbumService } from '../../service/album.service';

@Component({
  selector: 'app-media-controls',
  templateUrl: './media-controls.component.html',
  styleUrls: ['./media-controls.component.css']
})
export class MediaControlsComponent implements OnInit {
  stream: MediaStream;
  volume: number;
  constructor(private streamService: StreamService) { }

  ngOnInit() {
    this.streamService.onStreamStart(stream => this.stream = stream);
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

  previous() {
    this.streamService.previous();
  }

  albumImageUrl() {
    if (this.stream) {
      return AlbumService.getAlbumImageUrl(this.stream.mediaFile.id, '60');
    }
    return '';
  }

}
