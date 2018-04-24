import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared/service/auth.service';
import { AuthServiceSpy } from '../shared/service/auth.service.spec';
import { SystemService } from '../shared/service/system.service';
import { SystemServiceSpy } from '../shared/service/system.service.spec';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: AuthService, useValue: new AuthServiceSpy() },
        { provide: SystemService, useValue: SystemServiceSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
