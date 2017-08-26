import { TestBed, inject } from '@angular/core/testing';

import { AlbumService } from './album.service';

describe('AlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumService]
    });
  });

  it('should be created', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});
