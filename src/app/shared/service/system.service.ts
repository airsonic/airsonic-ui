import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../domain/auth.domain';

@Injectable()
export class SystemService {

  constructor(private http: HttpClient) { }

  ping() {
    const server = localStorage.getItem(SERVER_URL);
    return this.http.get(server + '/rest/ping');
  }
}
