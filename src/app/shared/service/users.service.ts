import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SERVER_URL } from '../domain/auth.domain';
import { Users, UsersResponse } from '../domain/users.domain';
import { User, UserResponse } from '../domain/user.domain';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUser(username: string): Observable<User> {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('username', username);
    return this.httpClient.get<UserResponse>(`${server}/rest/getUser`, {params: params})
      .map(res => res['subsonic-response'].user);
  }

  getUsers(): Observable<Array<User>> {
    const server = localStorage.getItem(SERVER_URL);
    return this.httpClient.get<UsersResponse>(`${server}/rest/getUsers`)
      .map(res => res['subsonic-response'].users.user);
  }

  createUser(options: {
    username: string,
    password: string,
    email: string,
    ldapAuthenticated?: boolean,
    adminRole?: boolean,
    settingsRole?: boolean,
    downloadRole?: boolean,
    uploadRole?: boolean,
    playlistRole?: boolean,
    coverArtRole?: boolean,
    commentRole?: boolean,
    podcastRole?: boolean,
    streamRole?: boolean,
    jukeboxRole?: boolean,
    shareRole?: boolean,
    videoConversionRole?: boolean },
    musicFolderId?: Array<number>) {
    const server = localStorage.getItem(SERVER_URL);
    let params = new HttpParams();
    for (const option in options) {
      if (options.hasOwnProperty(option)) {
        params = params.set(option, options[option]);
      }
    }
    for (const id in musicFolderId) {
      if (musicFolderId.hasOwnProperty(id)) {
        params = params.set('musicFolderId', id);
      }
    }
    return this.httpClient.get(`${server}/rest/createUser`, {params: params});
  }

  updateUser(options: {
    username: string,
    password?: string,
    email?: string,
    ldapAuthenticated?: boolean,
    adminRole?: boolean,
    settingsRole?: boolean,
    downloadRole?: boolean,
    uploadRole?: boolean,
    playlistRole?: boolean,
    coverArtRole?: boolean,
    commentRole?: boolean,
    podcastRole?: boolean,
    streamRole?: boolean,
    jukeboxRole?: boolean,
    shareRole?: boolean,
    videoConversionRole?: boolean,
    maxBitRate?: number },
    musicFolderId?: Array<number>) {
    const server = localStorage.getItem(SERVER_URL);
    let params = new HttpParams();
    for (const option in options) {
      if (options.hasOwnProperty(option)) {
        params = params.set(option, options[option]);
      }
    }
    for (const id in musicFolderId) {
      if (musicFolderId.hasOwnProperty(id)) {
        params = params.set('musicFolderId', id);
      }
    }
    return this.httpClient.get(`${server}/rest/updateUser`, {params: params});
  }

  deleteUser(username: string) {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('username', username);
    return this.httpClient.get(`${server}/rest/deleteUser`, {params: params});
  }

  changePassword(username: string, password: string) {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.httpClient.get(`${server}/rest/changePassword`, {params: params});
  }
}
