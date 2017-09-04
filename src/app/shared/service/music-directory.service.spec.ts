import { TestBed, inject } from '@angular/core/testing';

import { MusicDirectoryService } from './music-directory.service';
import { Observable } from 'rxjs/Observable';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MusicDirectoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicDirectoryService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([MusicDirectoryService], (service: MusicDirectoryService) => {
    expect(service).toBeTruthy();
  }));
});

export class MusicDirectoryServiceSpy {
  testDirectory = {
        child: [
          {
            albumId: 1
          }
        ]};
  getMusicDirectory = jasmine.createSpy('getMusicDirectory').and.callFake((id) => {
    return Observable.of(this.testDirectory);
  });
}
