import { inject, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { SystemService } from './system.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        UsersService,
        SystemService
    ],
      imports: [HttpClientTestingModule]
    });
    localStorage.clear();
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should be false if no user is set', inject([AuthService], (service: AuthService) => {
    localStorage.clear();
    expect(service.hasMyUser()).toBeFalsy();
  }));

  it('should be false if no user is set', inject([AuthService], (service: AuthService) => {
    service.loginMyUser('username', 'abc123', 'http://localhost');
    expect(service.hasMyUser()).toBeTruthy();
  }));

  it('should sign the user out', inject([AuthService], (service: AuthService) => {
    service.loginMyUser('username', 'abc123', 'http://localhost');
    expect(service.hasMyUser()).toBeTruthy();
    service.logoutMyUser();
    expect(service.hasMyUser()).toBeFalsy();
  }));
});

export class AuthServiceSpy {
  loginMyUser = jasmine.createSpy('loginMyUser');
  hasMyUser = jasmine.createSpy('hasMyUser');
  hasRole = jasmine.createSpy('hasRole');
  getMyUser = jasmine.createSpy('getMyUser');
}
