import { TestBed, inject } from '@angular/core/testing';

import { MusicFoldersService } from './music-folders.service';
import { Observable } from 'rxjs/Observable';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MusicFoldersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicFoldersService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([MusicFoldersService], (service: MusicFoldersService) => {
    expect(service).toBeTruthy();
  }));
});

export class MusicFoldersServiceSpy {
  testFolders = {
        musicFolder: [
          {
            id: 1
          }
        ]};
  getMusicFolders = jasmine.createSpy('getMusicFolders').and.callFake((id) => {
    return Observable.of(this.testFolders.musicFolder);
  });
}
