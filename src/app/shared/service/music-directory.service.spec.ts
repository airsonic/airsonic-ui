import { TestBed, inject } from '@angular/core/testing';

import { MusicDirectoryService } from './music-directory.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {Observable} from 'rxjs/internal/Observable';

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
    ]
  };
  getMusicDirectory = jasmine.createSpy('getMusicDirectory').and.callFake((id) => {
    return new Observable(observer => {
        observer.next(this.testDirectory);
        observer.complete();
    });
  });
}
