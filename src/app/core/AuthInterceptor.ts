

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req.params.append('u', 'admin')
      .append('t', '4b07bee94cf48ad97506f62bcda25c27')
      .append('s', 'c19b2d')
      .append('v', '1.15.0');
    return next.handle(req);
  }
}
