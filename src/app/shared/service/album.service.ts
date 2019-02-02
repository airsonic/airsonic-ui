import {Injectable} from '@angular/core';
import {MyUser, SERVER_URL, USER_INFO} from '../domain/auth.domain';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Album, AlbumResponse, Albums, AlbumsResponse} from '../domain/album.domain';

import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/internal/Observable';
import {catchError, last, map} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';

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
    return this.httpClient.get<AlbumsResponse>(`${server}/rest/getAlbumList`, { params: params })
      .pipe(
        map(res => res['subsonic-response'].albumList.album),
        last(),
        catchError(this.handleError)
      );
  }

  getAlbum(id: string): Observable<Album> {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('id', id);
    return this.httpClient.get<AlbumResponse>(`${server}/rest/getAlbum`, { params: params })
      .pipe(
        map(res => res['subsonic-response'].album),
        last(),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
