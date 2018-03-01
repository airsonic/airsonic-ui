import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {MusicDirectory, MusicDirectoryResponse, MusicFolder, MusicFolderResponse} from '../domain/music-directory.domain';
import { SERVER_URL } from '../domain/auth.domain';
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

  getMusicFolders(): Observable<Array<MusicFolder>> {
    const server = localStorage.getItem(SERVER_URL);
    return this.httpClient.get<MusicFolderResponse>(`${server}rest/getMusicFolders`)
      .map(res => res['subsonic-response'].musicFolders.musicFolder);
  }
}
