import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SERVER_URL } from './user.service';
import { MusicDirectoryResponse } from '../domain/music-directory.domain';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MusicDirectoryService {

  constructor(private httpClient: HttpClient) { }

  getMusicDirectory(id: string): Observable<MusicDirectoryResponse> {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams().set('id', id);
    return this.httpClient.get<MusicDirectoryResponse>(`${server}/rest/getMusicDirectory`, {params: params});
  }
}
