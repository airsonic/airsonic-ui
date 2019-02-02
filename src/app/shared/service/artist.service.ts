import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { SERVER_URL } from '../domain/auth.domain';
import { Observable } from 'rxjs';
import { ArtistIndex, ArtistsResponse } from '../domain/artist.domain';
import {catchError, last, map} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';

@Injectable()
export class ArtistService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<ArtistIndex>> {
    const server = localStorage.getItem(SERVER_URL);
    return this.httpClient.get<ArtistsResponse>(`${server}/rest/getArtists`)
      .pipe(
        map(res => res['subsonic-response'].artists.index),
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
