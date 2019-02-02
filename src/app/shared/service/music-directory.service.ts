import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { SERVER_URL } from '../domain/auth.domain';
import { MusicDirectory, MusicDirectoryResponse } from '../domain/music-directory.domain';
import { Observable } from 'rxjs';
import {catchError, last, map} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';

@Injectable()
export class MusicDirectoryService {

  constructor(private httpClient: HttpClient) { }

  getMusicDirectory(id: string): Observable<MusicDirectory> {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams().set('id', id);
    return this.httpClient.get<MusicDirectoryResponse>(`${server}/rest/getMusicDirectory`, { params: params })
      .pipe(
        map(res => res['subsonic-response'].directory),
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
