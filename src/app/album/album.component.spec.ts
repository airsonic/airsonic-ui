import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponent } from './album.component';
import { TimePipe } from '../shared/pipe/time.pipe';
import { AlbumService } from '../shared/service/album.service';
import { MusicDirectoryService } from '../shared/service/music-directory.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/of';
import { AlbumServiceSpy } from '../shared/service/album.service.spec';
import { MusicDirectoryServiceSpy } from '../shared/service/music-directory.service.spec';
import { StreamService } from '../shared/service/stream.service';
import { StreamServiceSpy } from '../shared/service/stream.service.spec';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let albumService: AlbumServiceSpy;
  let musicDirectoryService: MusicDirectoryServiceSpy;
  const activatedRoute = {
    snapshot: {
      params: {
        id: '1234'
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumComponent, TimePipe ],
      providers: [
        { provide: AlbumService, useValue: new AlbumServiceSpy() },
        { provide: MusicDirectoryService, useValue: new MusicDirectoryServiceSpy() },
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: StreamService, useValue: new StreamServiceSpy() }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    albumService = fixture.debugElement.injector.get(AlbumService) as any;
    musicDirectoryService = fixture.debugElement.injector.get(MusicDirectoryService) as any;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

