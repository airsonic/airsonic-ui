import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../shared/service/album.service';
import { Albums } from '../shared/domain/album.domain';
import { NotificationService } from '../shared/service/notification.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: Array<Albums> = [];
  pageSize = 40;
  page = 0;
  // pageSorting = default is 'alphabeticalByName' | 'random', 'newest', 'highest', 'frequent',
  // 'recent', 'alphabeticalByName', 'alphabeticalByArtist', 'starred', 'byYear', 'byGenre'
  pageSorting = 'random';

  constructor(private albumService: AlbumService,
              private notificationService: NotificationService) {}

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.albumService.getAlbums({type: this.pageSorting, size: this.pageSize, offset: this.page * this.pageSize})
      .subscribe(
        data => this.albums.push(...data),
        err => this.notificationService.notify(err));
  }

  onScroll() {
    this.page++;
    this.getAlbums();
  }
}
