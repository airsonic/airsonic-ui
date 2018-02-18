import { inject, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule]
    });
    localStorage.clear();
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should be false if no user is set', inject([AuthService], (service: AuthService) => {
    localStorage.clear();
    expect(service.hasUser()).toBeFalsy();
  }));

  it('should be false if no user is set', inject([AuthService], (service: AuthService) => {
    service.loginUser('username', 'abc123', 'http://localhost');
    expect(service.hasUser()).toBeTruthy();
  }));

  it('should sign the user out', inject([AuthService], (service: AuthService) => {
    service.loginUser('username', 'abc123', 'http://localhost');
    expect(service.hasUser()).toBeTruthy();
    service.logout();
    expect(service.hasUser()).toBeFalsy();
  }));
});

export class AuthServiceSpy {
  loginUser = jasmine.createSpy('loginUser');
}
