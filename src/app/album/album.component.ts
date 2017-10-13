import { Component, OnInit } from '@angular/core';
import { MusicDirectoryService } from '../shared/service/music-directory.service';
import { ActivatedRoute } from '@angular/router';
import { MusicDirectory } from '../shared/domain/music-directory.domain';
import { AlbumService } from '../shared/service/album.service';
import { Album } from '../shared/domain/album.domain';
import { StreamService } from '../shared/service/stream.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  musicDirectory: MusicDirectory;
  album: Album;
  constructor(private musicDirectoryService: MusicDirectoryService,
              private route: ActivatedRoute,
              private albumService: AlbumService,
              private streamService: StreamService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.musicDirectoryService.getMusicDirectory(id)
      .subscribe(
        data => {
          this.musicDirectory = data;
          this.getAlbum(this.musicDirectory.child[0].albumId);
        },
        error => console.log(error)
      );
  }

  getAlbumImageUrl(id: string) {
    return AlbumService.getAlbumImageUrl(id, '200');
  }

  getAlbum(albumId: string) {
    this.albumService.getAlbum(albumId)
      .subscribe(
        res => this.album = res,
        err => console.log(err)
      );
  }

  playAlbum() {
    this.streamService.addToQueue(this.album.song);
  }
}
