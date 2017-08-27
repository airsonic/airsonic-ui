import { Component, OnInit } from '@angular/core';
import { MusicDirectoryService } from '../shared/service/music-directory.service';
import { ActivatedRoute } from '@angular/router';
import { MusicDirectory } from '../shared/domain/music-directory.domain';
import { AlbumService } from '../shared/service/album.service';
import { Album } from '../shared/domain/album.domain';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  musicDirectory: MusicDirectory;
  album: Album;
  constructor(private musicDirectoryService: MusicDirectoryService,
              private route: ActivatedRoute,
              private albumService: AlbumService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.musicDirectoryService.getMusicDirectory(id)
      .subscribe(
        data => {
          this.musicDirectory = data['subsonic-response'].directory;
          this.albumService.getAlbum(this.musicDirectory.child[0].albumId)
            .subscribe(
              res => this.album = res['subsonic-response'].album,
              err => console.log(err)
            );
        },
        error => console.log(error)
      );
  }

  getAlbumImageUrl(id: String) {
    return this.albumService.getAlbumImageUrl(id);
  }

}
