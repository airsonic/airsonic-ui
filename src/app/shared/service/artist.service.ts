import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArtistService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    this.httpClient.get('http://localhost:8080/api/artists')
      .subscribe(resp => {
        console.log(resp);
      },
      err => {
        console.log(err);
      });
  }
}
