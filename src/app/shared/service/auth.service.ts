import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { MyUser, MyRoles, USER_INFO, SERVER_URL } from '../domain/auth.domain';
import { User } from '../domain/user.domain';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService) { }

  loginMyUser(username: string, password: string, server: string) {
    const salt = this.generateSalt();
    const token = new Md5().appendStr(password).appendStr(salt).end().toString();
    const myUser : MyUser = {
      name: username,
      email: null,
      salt: salt,
      token: token,
      server: server,
      roles: null,
      folder: null
    };
    localStorage.setItem(USER_INFO, JSON.stringify(myUser));
    localStorage.setItem(SERVER_URL, server);
  }

  getMyUserInfos(username: string) {
    let myUser: MyUser = this.getMyUser();
    let myRoles: MyRoles;
    this.usersService.getUser(username).subscribe(res => {
      myUser.email = res.email;
      myUser.folder = res.folder;
      myUser.roles = {
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
      localStorage.setItem(USER_INFO, JSON.stringify(myUser));
    });
  }

  getMyUser(): MyUser {
    return JSON.parse(localStorage.getItem(USER_INFO));
  }

  hasMyUser(): boolean {
    return this.getMyUser() !== null;
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
