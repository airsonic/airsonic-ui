import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { MyUser, SERVER_URL } from '../domain/auth.domain';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(localStorage.getItem(SERVER_URL))) {
      const myUser: MyUser = this.authService.getMyUser();
      const params = req.params
        .set('u', myUser.name)
        .set('t', myUser.token)
        .set('s', myUser.salt)
        .set('c', environment.applicationName)
        .set('f', 'json')
        .set('v', environment.apiVersion);
      const authReq = req.clone({ params: params });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
