import { Component, Input, OnInit } from '@angular/core';
import { Albums } from '../../domain/album.domain';
import { AlbumService } from '../../service/album.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  @Input()
  albums: Array<Albums>;

  constructor() { }

  ngOnInit() {
  }

  getAlbumImageUrl(id: string) {
    // TODO: Return a stock image when id is null
    if (id != null) {
      return AlbumService.getAlbumImageUrl(id);
    }
  }
}
