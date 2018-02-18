import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from './shared/service/auth.service';
import { AuthServiceSpy } from './shared/service/auth.service.spec';
import { RouterTestingModule } from '@angular/router/testing';
import { SideMenuService } from './shared/service/side-menu.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthService, useValue: new AuthServiceSpy() },
        SideMenuService,
        TranslateService
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
