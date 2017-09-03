import { Component, OnInit } from '@angular/core';
import { MediaStream, StreamService } from '../../service/stream.service';

@Component({
  selector: 'app-media-controls',
  templateUrl: './media-controls.component.html',
  styleUrls: ['./media-controls.component.css']
})
export class MediaControlsComponent implements OnInit {
  stream: MediaStream;

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

}
