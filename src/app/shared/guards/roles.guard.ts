import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const role = next.data['role'] as string;
    return this.authService.hasRole(role);
  }
}
