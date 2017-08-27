import { TestBed, inject } from '@angular/core/testing';

import { MusicDirectoryService } from './music-directory.service';

describe('MusicDirectoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicDirectoryService]
    });
  });

  it('should be created', inject([MusicDirectoryService], (service: MusicDirectoryService) => {
    expect(service).toBeTruthy();
  }));
});
