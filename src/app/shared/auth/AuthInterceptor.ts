import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_URL, User, AuthService } from '../service/auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(localStorage.getItem(SERVER_URL))) {
      const user: User = this.authService.getUser();
      const params = req.params
        .set('u', user.name)
        .set('t', user.token)
        .set('s', user.salt)
        .set('c', environment.applicationName)
        .set('f', 'json')
        .set('v', environment.apiVersion);
      const authReq = req.clone({params: params});
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
