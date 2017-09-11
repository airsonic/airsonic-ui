import { Component, Input, OnInit } from '@angular/core';
import { MediaFile } from '../../domain/media-file.domain';
import { StreamService } from '../../service/stream.service';

@Component({
  selector: 'app-song-table',
  templateUrl: './song-table.component.html',
  styleUrls: ['./song-table.component.css']
})
export class SongTableComponent implements OnInit {
  @Input()
  songs: Array<MediaFile>;

  constructor(private streamService: StreamService) { }

  ngOnInit() {
  }

  playSong(song: MediaFile) {
    this.streamService.streamFile(song);
  }

}
