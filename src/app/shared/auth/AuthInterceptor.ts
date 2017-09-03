import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User, UserService } from '../service/user.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user: User = this.userService.getUser();
    if (req.url.startsWith(user.server)) {
      const params = req.params
        .set('u', user.name)
        .set('t', user.token)
        .set('s', user.salt)
        .set('c', environment.applicationName)
        .set('f', 'json')
        .set('v', '1.15.0');
      const authReq = req.clone({params: params});
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
