import { Component, OnInit } from '@angular/core';
import {User} from '../shared/domain/user.domain';
import {MusicFolder} from '../shared/domain/music-directory.domain';
import {MusicDirectoryService} from '../shared/service/music-directory.service';
import {NotificationService} from '../shared/service/notification.service';
import {UserService} from '../shared/service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  users: Array<User> = [];
  user: User = {} as User;
  selUser: User = {} as User;
  folders: Array<MusicFolder> = [];
  newUserName: string;
  newPassword: string;
  newPasswordConf: string;

  bitRates = [
    {rate: '', text: 'No Limit'},
    {rate: 32, text: '32 Kbps'},
    {rate: 40, text: '40 Kbps'},
    {rate: 48, text: '48 Kbps'},
    {rate: 56, text: '56 Kbps'},
    {rate: 64, text: '64 Kbps'},
    {rate: 80, text: '80 Kbps'},
    {rate: 96, text: '96 Kbps'},
    {rate: 112, text: '112 Kbps'},
    {rate: 128, text: '128 Kbps'},
    {rate: 160, text: '160 Kbps'},
    {rate: 192, text: '192 Kbps'},
    {rate: 224, text: '224 Kbps'},
    {rate: 256, text: '256 Kbps'},
    {rate: 320, text: '320 Kbps'},
  ];

  constructor(private directoryService: MusicDirectoryService, private userService: UserService,
              private notificationService: NotificationService, private router: Router) { }

  ngOnInit() {
    this.refreshUserList();

    this.directoryService.getMusicFolders().subscribe(
      data => this.folders.push(...data),
      err => this.notificationService.notify(err)
    );
  }

  selectFolders(folder) {
    if (this.selUser.folder) {
      return this.selUser.folder.indexOf(folder) >= 0;
    }
  }

  deleteUser(username) {
    this.userService.deleteUser(username).subscribe(
      data => this.refreshUserList(),
      err => this.notificationService.notify(err)
    );
  }

  saveOrUpdateUser(user: User, password: string) {
    if (user.username === '-- New User --') {
      this.createUser(user);
    } else {
      this.updateUser(user);
    }
  }

  refreshUserList() {
    this.userService.getUsers().subscribe(
      data => {
        this.users.length = 0;
        this.users.push({username: '-- New User --', settingsRole: true, streamRole: true} as User);
        this.users.push(...data);
        this.selUser = this.users[0];
      },
      err => {
        this.notificationService.notify(err);
        this.router.navigate(['']);
      }
    );
  }

  private updateUser(user: User) {
    if (this.newPassword !== this.newPasswordConf) {
      window.alert('Passwords must match.');
    } else {
      this.userService.updateUser(user, this.newPassword).subscribe(
        data => {
          this.refreshUserList();
          this.newUserName = '';
          this.newPassword = '';
          this.newPasswordConf = '';
        },
        err => this.notificationService.notify(err)
      );
    }
  }

  private createUser(user: User) {
    if (this.newPassword !== this.newPasswordConf) {
      window.alert('Passwords must match.');
    } else {
      user.username = this.newUserName;
      this.userService.createUser(user, this.newPassword).subscribe(
        data => {
          this.refreshUserList();
          this.newUserName = '';
          this.newPassword = '';
          this.newPasswordConf = '';
        },
        err => this.notificationService.notify(err)
      );
    }
  }
}
