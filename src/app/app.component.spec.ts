import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from './shared/service/user.service';
import { UserServiceSpy } from './shared/service/user.service.spec';
import { RouterTestingModule } from '@angular/router/testing';
import { SideMenuService } from './shared/service/side-menu.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: UserService, useValue: new UserServiceSpy() },
        SideMenuService
      ],
      imports: [ RouterTestingModule ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
