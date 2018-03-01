import { TestBed, async, inject } from '@angular/core/testing';

import { RolesGuard } from './roles.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../service/auth.service';
import { UsersService } from '../service/users.service';

describe('RolesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RolesGuard,
        AuthService,
        UsersService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should ...', inject([RolesGuard], (guard: RolesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
