import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../shared/service/album.service';
import { Albums } from '../shared/domain/album.domain';
import { NotificationService } from '../shared/service/notification.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Array<Albums> = [];
  pageSize = 20;
  page = 0;

  constructor(private albumService: AlbumService,
              private notificationService: NotificationService) {}

  ngOnInit() {
    this.getAlbums();
  }

  getAlbumImageUrl(id: String) {
    return this.albumService.getAlbumImageUrl(id);
  }

  getAlbums() {
    this.albumService.getAlbums({size: this.pageSize, offset: this.page * this.pageSize})
      .subscribe(
        data => this.albums.push(...data['subsonic-response'].albumList.album),
        err => this.notificationService.notify(err));
  }

  onPrevious() {
    if (this.page > 0) {
      this.page--;
      this.getAlbums();
    }
  }

  onNext() {
    this.page++;
    this.getAlbums();
  }

  onScroll() {
    this.page++;
    this.getAlbums();
  }
}
