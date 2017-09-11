import { Component, Input, OnInit } from '@angular/core';
import { Albums } from '../../domain/album.domain';
import { AlbumService } from '../../service/album.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input()
  albums: Array<Albums>;

  constructor() { }

  ngOnInit() {
  }

  getAlbumImageUrl(id: string) {
    return AlbumService.getAlbumImageUrl(id);
  }

}
