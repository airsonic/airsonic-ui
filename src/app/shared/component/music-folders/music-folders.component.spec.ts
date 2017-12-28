import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicFoldersComponent } from './music-folders.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MusicFoldersService } from '../../service/music-folders.service';
// import { MusicFoldersServiceSpy } from '../../service/music-folders.service.spec';
import { NotificationService } from '../../service/notification.service';
import { NotificationServiceSpy } from '../../service/notification.service.spec';
import { FormsModule } from '@angular/forms';

describe('MusicFoldersComponent', () => {
  let component: MusicFoldersComponent;
  let fixture: ComponentFixture<MusicFoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [ MusicFoldersComponent ],
      providers:[
        MusicFoldersService,
        // { provide: MusicFoldersService, useValue: MusicFoldersServiceSpy },
        { provide: NotificationService, useValue: new NotificationServiceSpy() }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
