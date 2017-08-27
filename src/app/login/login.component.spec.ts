import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/service/user.service';
import { UserServiceSpy } from '../shared/service/user.service.spec';
import { SystemService } from '../shared/service/system.service';
import { SystemServiceSpy } from '../shared/service/system.service.spec';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: UserService, useValue: UserServiceSpy },
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
