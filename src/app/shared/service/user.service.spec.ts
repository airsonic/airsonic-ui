import { TestBed, inject } from '@angular/core/testing';

import { User, USER_INFO, UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should be false if no user is set', inject([UserService], (service: UserService) => {
    localStorage.clear();
    expect(service.hasUser()).toBeFalsy();
  }));

  it('should be false if no user is set', inject([UserService], (service: UserService) => {
    const user: User = {
      name: 'username',
      salt: 'abc123',
      token: 'testToken',
      server: 'localhost:8080'
    };
    localStorage.setItem(USER_INFO, JSON.stringify(user));
    expect(service.hasUser()).toBeTruthy();
  }));
});

export class UserServiceSpy {
  loginUser = jasmine.createSpy('loginUser');
}
