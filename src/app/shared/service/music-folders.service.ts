import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SERVER_URL } from './user.service';
import { MusicFolder, MusicFoldersResponse } from '../domain/music-folders.domain';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MusicFoldersService {

  constructor(private httpClient: HttpClient) { }

  getMusicFolders(): Observable<Array<MusicFolder>> {
    const server = localStorage.getItem(SERVER_URL);
    return this.httpClient.get<MusicFoldersResponse>(`${server}/rest/getMusicFolders`)
      .map(res => res['subsonic-response'].musicFolders.musicFolder);
  }
}
