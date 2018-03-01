import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsComponent } from './user-settings.component';
import { FormsModule } from '@angular/forms';
import {MusicDirectoryService} from '../shared/service/music-directory.service';
import {MusicDirectoryServiceSpy, MusicFolderServiceSpy} from '../shared/service/music-directory.service.spec';
import {UserService} from '../shared/service/user.service';
import {NotificationService} from '../shared/service/notification.service';
import {NotificationServiceSpy} from '../shared/service/notification.service.spec';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {UserServiceSpy} from '../shared/service/user.service.spec';

describe('UserSettingsComponent', () => {
  let component: UserSettingsComponent;
  let fixture: ComponentFixture<UserSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsComponent ],
      imports: [
        FormsModule,
      ],
      providers: [
        { provide: MusicDirectoryService, useValue: new MusicFolderServiceSpy() },
        { provide: UserService, useValue: new UserServiceSpy() },
        { provide: NotificationService, useValue: new NotificationServiceSpy },
        { provide: Router, useValue: new RouterTestingModule() },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
