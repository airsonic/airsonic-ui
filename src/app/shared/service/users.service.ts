import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {SERVER_URL} from '../domain/auth.domain';
import {UsersResponse} from '../domain/users.domain';
import {User, UserResponse} from '../domain/user.domain';
import {Observable} from 'rxjs';
import {catchError, last, map} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUser(username: string): Observable<User> {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('username', username);
    return this.httpClient.get<UserResponse>(`${server}/rest/getUser`, { params: params })
      .pipe(
        map(res => res['subsonic-response'].user),
        last(),
        catchError(this.handleError)
      );
  }

  getUsers(): Observable<Array<User>> {
    const server = localStorage.getItem(SERVER_URL);
    return this.httpClient.get<UsersResponse>(`${server}/rest/getUsers`)
      .pipe(
        map(res => res['subsonic-response'].users.user),
        last(),
        catchError(this.handleError)
      );
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
    videoConversionRole?: boolean
  },
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
    return this.httpClient.get(`${server}/rest/createUser`, { params: params });
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
    maxBitRate?: number
  },
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
    return this.httpClient.get(`${server}/rest/updateUser`, { params: params });
  }

  deleteUser(username: string) {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('username', username);
    return this.httpClient.get(`${server}/rest/deleteUser`, { params: params });
  }

  changePassword(username: string, password: string) {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.httpClient.get(`${server}/rest/changePassword`, { params: params });
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
