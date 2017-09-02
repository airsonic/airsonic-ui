import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from './user.service';
import { Observable } from 'rxjs/Observable';
import { ArtistIndex, ArtistsResponse } from '../domain/artist.domain';

@Injectable()
export class ArtistService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<ArtistIndex>> {
    const server = localStorage.getItem(SERVER_URL);
    return this.httpClient.get<ArtistsResponse>(`${server}/rest/getArtists`)
      .map(res => res['subsonic-response'].artists.index);
  }
}
