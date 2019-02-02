import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse, SearchResult2 } from '../domain/search.domain';
import { SERVER_URL } from '../domain/auth.domain';
import {catchError, last, map} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';

@Injectable()
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getSearch2(query: string): Observable<SearchResult2> {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('query', query);
    return this.httpClient.get<SearchResponse>(`${server}/rest/search2`, { params: params })
      .pipe(
        map(res => res['subsonic-response'].searchResult2),
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
