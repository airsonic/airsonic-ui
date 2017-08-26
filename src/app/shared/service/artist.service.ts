import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from './user.service';
import { Observable } from 'rxjs/Observable';
import { ArtistsResponse } from '../domain/artist.domain';

@Injectable()
export class ArtistService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ArtistsResponse> {
    const server = localStorage.getItem(SERVER_URL);
    return this.httpClient.get<ArtistsResponse>(`${server}/rest/getArtists`);
  }
}
