import { TestBed, inject } from '@angular/core/testing';

import { AlbumService } from './album.service';
import { Observable } from 'rxjs/Observable';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
    return Observable.of(this.testAlbum);
  });
  getAlbums = jasmine.createSpy('getAlbums').and.callFake(() => {
    return Observable.of();
  });
}
