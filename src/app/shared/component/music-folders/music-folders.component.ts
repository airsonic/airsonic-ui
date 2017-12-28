import { Component, OnInit } from '@angular/core';
import { MusicFoldersService } from '../../service/music-folders.service';
import { MusicFolder } from '../../domain/music-folders.domain';
import { NotificationService } from '../../service/notification.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-music-folders',
  templateUrl: './music-folders.component.html',
  styleUrls: ['./music-folders.component.scss']
})
export class MusicFoldersComponent implements OnInit {
  musicFolders: Array<MusicFolder>  = [];
  selectedMusicFolder: string;

  constructor(private musicFoldersService: MusicFoldersService,
              private notificationService: NotificationService) {}

  ngOnInit() {
    this.getMusicFolders();
  }

  getMusicFolders() {
    this.musicFoldersService.getMusicFolders()
      .subscribe(
        data => this.musicFolders.push(...data),
        err => this.notificationService.notify(err));
  }
}

export const SELECTED_MUSIC_FOLDER = 'selected_music_folder';
