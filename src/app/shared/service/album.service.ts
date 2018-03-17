import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MyUser, SERVER_URL, USER_INFO } from '../domain/auth.domain';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Album, AlbumResponse, Albums, AlbumsResponse } from '../domain/album.domain';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class AlbumService {

  constructor(private httpClient: HttpClient) { }

  static getAlbumImageUrl(id: string, size: string = '160') {
    const userInfo: MyUser = JSON.parse(localStorage.getItem(USER_INFO));
    return `${userInfo.server}/rest/getCoverArt?id=${id}&v=${environment.apiVersion}&u=${userInfo.name}` +
      `&s=${userInfo.salt}&t=${userInfo.token}&c=${environment.applicationName}&size=${size}`.trim();
  }

  getAlbums(options: {
    type?: string,
    size?: number,
    offset?: number,
    fromYear?: string,
    toYear?: string,
    genre?: string,
    musicFolderId?: string
  }): Observable<Array<Albums>> {
    const defaultOptions = {
      type: 'alphabeticalByName'
    };
    const sentOptions = Object.assign({}, defaultOptions, options);
    const server = localStorage.getItem(SERVER_URL);
    let params = new HttpParams();
    for (const option in sentOptions) {
      if (sentOptions.hasOwnProperty(option)) {
        params = params.set(option, sentOptions[option]);
      }
    }
    return this.httpClient.get<AlbumsResponse>(`${server}/rest/getAlbumList`, {params: params})
      .map(res => res['subsonic-response'].albumList.album);
  }

  getAlbum(id: string): Observable<Album> {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('id', id);
    return this.httpClient.get<AlbumResponse>(`${server}/rest/getAlbum`, {params: params})
      .map(res => res['subsonic-response'].album);
  }
}
