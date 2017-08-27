import { Injectable } from '@angular/core';
import { SERVER_URL } from './user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AlbumResponse, AlbumsResponse } from '../domain/album.domain';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlbumService {

  constructor(private httpClient: HttpClient) { }

  getAlbums(options: {
    type?: string,
    size?: number,
    offset?: number,
    fromYear?: string,
    toYear?: string,
    genre?: string,
    musicFolderId?: string
  }) {
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
    return this.httpClient.get<AlbumsResponse>(`${server}/rest/getAlbumList`, {params: params});
  }

  getAlbum(id: string): Observable<AlbumResponse> {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('id', id);
    return this.httpClient.get<AlbumResponse>(`${server}/rest/getAlbum`, {params: params});
  }

  getAlbumImageUrl(id: String) {
    const server = localStorage.getItem(SERVER_URL);
    return `${server}/coverArt.view?size=160&id=${id}`;
  }
}
