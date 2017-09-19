import { inject, TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });
    localStorage.clear();
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should be false if no user is set', inject([UserService], (service: UserService) => {
    localStorage.clear();
    expect(service.hasUser()).toBeFalsy();
  }));

  it('should be false if no user is set', inject([UserService], (service: UserService) => {
    service.loginUser('username', 'abc123', 'http://localhost');
    expect(service.hasUser()).toBeTruthy();
  }));

  it('should sign the user out', inject([UserService], (service: UserService) => {
    service.loginUser('username', 'abc123', 'http://localhost');
    expect(service.hasUser()).toBeTruthy();
    service.logout();
    expect(service.hasUser()).toBeFalsy();
  }));
});

export class UserServiceSpy {
  loginUser = jasmine.createSpy('loginUser');
}
