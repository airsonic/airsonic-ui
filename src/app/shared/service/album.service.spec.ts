import { TestBed, inject } from '@angular/core/testing';

import { AlbumService } from './album.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {Observable} from 'rxjs/internal/Observable';

describe('AlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});

export class AlbumServiceSpy {
  testAlbum = {
    'subsonic-response': {
      album: null
    }
  };
  getAlbum = jasmine.createSpy('getAlbum').and.callFake((id) => {
    return new Observable(observer => {
      observer.next(this.testAlbum);
      observer.complete();
    });
  });
  getAlbums = jasmine.createSpy('getAlbums').and.callFake(() => {
    return new Observable(observer => observer.complete());
  });
  getAlbumImageUrl = jasmine.createSpy('getAlbumImageUrl');
}
