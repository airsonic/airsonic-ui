import { TestBed, inject } from '@angular/core/testing';

import { ArtistService } from './artist.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {Observable} from 'rxjs/internal/Observable';

describe('ArtistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([ArtistService], (service: ArtistService) => {
    expect(service).toBeTruthy();
  }));
});

export class ArtistServiceSpy {
  getAll = jasmine.createSpy('getAll').and.callFake(() => {
    return new Observable(observer => observer.complete());
  });
}
