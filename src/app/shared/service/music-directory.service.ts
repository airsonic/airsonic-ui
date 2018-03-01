import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SERVER_URL } from '../domain/auth.domain';
import { MusicDirectory, MusicDirectoryResponse } from '../domain/music-directory.domain';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MusicDirectoryService {

  constructor(private httpClient: HttpClient) { }

  getMusicDirectory(id: string): Observable<MusicDirectory> {
    const server = localStorage.getItem(SERVER_URL);
    const params = new HttpParams().set('id', id);
    return this.httpClient.get<MusicDirectoryResponse>(`${server}/rest/getMusicDirectory`, {params: params})
      .map(res => res['subsonic-response'].directory);
  }
}
