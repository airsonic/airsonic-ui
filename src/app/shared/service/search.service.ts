import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SearchResponse, SearchResult2 } from '../domain/search.domain';
import { SERVER_URL } from '../domain/auth.domain';

@Injectable()
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getSearch2(query: string): Observable<SearchResult2> {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams()
      .set('query', query);
    return this.httpClient.get<SearchResponse>(`${server}/rest/search2`, {params: params})
      .map(res => res['subsonic-response'].searchResult2);
  }

}
