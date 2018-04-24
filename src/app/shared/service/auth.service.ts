import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { MyUser, MyRoles, USER_INFO, USER_ROLES, USER_FOLDERS, SERVER_URL } from '../domain/auth.domain';
import { UsersService } from './users.service';
import { SystemService } from './system.service';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService,
    private systemService: SystemService) { }

  loginMyUser(username: string, password: string, server: string) {
    // Log user in
    const salt = this.generateSalt();
    const token = new Md5().appendStr(password).appendStr(salt).end().toString();
    const myUser: MyUser = {
      name: username,
      salt: salt,
      token: token,
      server: server
    };
    localStorage.setItem(USER_INFO, JSON.stringify(myUser));
    localStorage.setItem(SERVER_URL, server);
    this.loadMyRoles(username);
    this.loadMyFolders(username);
  }

  loadMyRoles(username: string) {
    this.usersService.getUser(username).subscribe(
      res => {
        // Load user roles
        const myRoles: MyRoles = {
          adminRole: res.adminRole,
          settingsRole: res.settingsRole,
          downloadRole: res.downloadRole,
          uploadRole: res.uploadRole,
          playlistRole: res.playlistRole,
          coverArtRole: res.coverArtRole,
          commentRole: res.commentRole,
          podcastRole: res.podcastRole,
          streamRole: res.streamRole,
          jukeboxRole: res.jukeboxRole,
          shareRole: res.shareRole,
          videoConversionRole: res.videoConversionRole
        };
        // Save loaded data
        localStorage.setItem(USER_ROLES, JSON.stringify(myRoles));
      });
  }

  loadMyFolders(username: string) {
    this.usersService.getUser(username).subscribe(
      res => {
        // Load user folders
        const myFolders = res.folder;
        // Save loaded data
        localStorage.setItem(USER_FOLDERS, JSON.stringify(myFolders));
      });
  }

  getMyUser(): MyUser {
    return JSON.parse(localStorage.getItem(USER_INFO));
  }

  getMyRoles(): MyRoles {
    return JSON.parse(localStorage.getItem(USER_ROLES));
  }

  getMyFolders(): Array<number> {
    return JSON.parse(localStorage.getItem(USER_FOLDERS));
  }

  hasMyUser(): boolean {
    return this.getMyUser() !== null;
  }

  hasRole(role: string): boolean {
    return this.getMyRoles()[role];
  }

  logoutMyUser() {
    localStorage.clear();
  }

  private generateSalt() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 20; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }
}
