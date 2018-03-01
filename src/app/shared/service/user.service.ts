import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SERVER_URL, USER_INFO} from './auth.service';
import {User, UserResponse} from '../domain/user.domain';
import {Observable} from 'rxjs/Observable';
import {Users, UsersResponse} from '../domain/users.domain';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<User> {
    const username = JSON.parse(localStorage.getItem(USER_INFO)).name;
    const params = new HttpParams()
      .set('username', username);
    const server = localStorage.getItem(SERVER_URL);
    return this.httpClient.get<UserResponse>(`${server}rest/getUser`, {params: params}).map(res => res['subsonic-response'].user);
  }

  getUsers(): Observable<Array<User>> {
    const server = localStorage.getItem(SERVER_URL);
    return this.httpClient.get<UsersResponse>(`${server}rest/getUsers`).map(res => res['subsonic-response'].users.user);
  }

  deleteUser(username) {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('username', username);
    return this.httpClient.get(`${server}rest/deleteUser`, {params: params}).map(res => res['subsonic-response']);
  }

  changePassword(username, password) {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.httpClient.get(`${server}rest/changePassword`, {params: params}).map(res => res['subsonic-response']);
  }

  createUser(user: {username, email, adminRole?, settingsRole?, streamRole?, jukeboxRole?, downloadRole?,
             uploadRole?, coverArtRole?, commentRole?, podcastRole?, shareRole?, musicFolderId?, maxBitRate?}, password) {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('username', user.username)
      .set('password', password)
      .set('email', user.email)
      .set('adminRole', user.adminRole)
      .set('settingsRole', user.settingsRole)
      .set('streamRole', user.streamRole)
      .set('jukeboxRole', user.jukeboxRole)
      .set('downloadRole', user.downloadRole)
      .set('uploadRole', user.uploadRole)
      .set('coverArtRole', user.coverArtRole)
      .set('commentRole', user.commentRole)
      .set('podcastRole', user.podcastRole)
      .set('shareRole', user.shareRole)
      .set('musicFolderId', user.musicFolderId)
      .set('maxBitRate', user.maxBitRate);
    return this.httpClient.get(`${server}rest/createUser`, {params: params}).map(res => res['subsonic-response']);
  }

  updateUser(user: {username, email?, adminRole?, settingsRole?, streamRole?, jukeboxRole?, downloadRole?,
             uploadRole?, coverArtRole?, commentRole?, podcastRole?, shareRole?, musicFolderId?, maxBitRate?}, password?) {
    const server = localStorage.getItem(SERVER_URL);
    let params = new HttpParams()
      .set('username', user.username)
      .set('email', user.email)
      .set('adminRole', user.adminRole)
      .set('settingsRole', user.settingsRole)
      .set('streamRole', user.streamRole)
      .set('jukeboxRole', user.jukeboxRole)
      .set('downloadRole', user.downloadRole)
      .set('uploadRole', user.uploadRole)
      .set('coverArtRole', user.coverArtRole)
      .set('commentRole', user.commentRole)
      .set('podcastRole', user.podcastRole)
      .set('shareRole', user.shareRole)
      .set('musicFolderId', user.musicFolderId)
      .set('maxBitRate', user.maxBitRate);
    if (password) {
      params = params.set('password', password);
    }
    return this.httpClient.get(`${server}rest/updateUser`, {params: params}).map(res => res['subsonic-response']);
  }
}
