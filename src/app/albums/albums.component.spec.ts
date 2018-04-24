import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AlbumService } from '../shared/service/album.service';
import { NotificationService } from '../shared/service/notification.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumServiceSpy } from '../shared/service/album.service.spec';
import { NotificationServiceSpy } from '../shared/service/notification.service.spec';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;
  let albumService: AlbumServiceSpy;
  let notificationService: NotificationServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
      providers: [
        { provide: AlbumService, useValue: new AlbumServiceSpy() },
        { provide: NotificationService, useValue: new NotificationServiceSpy() }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    albumService = fixture.debugElement.injector.get(AlbumService) as any;
    notificationService = fixture.debugElement.injector.get(NotificationService) as any;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
