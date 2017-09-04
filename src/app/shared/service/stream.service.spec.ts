import { TestBed, inject } from '@angular/core/testing';

import { StreamService } from './stream.service';
import { Observable } from 'rxjs/Observable';

describe('StreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StreamService]
    });
  });

  it('should be created', inject([StreamService], (service: StreamService) => {
    expect(service).toBeTruthy();
  }));
});

export class StreamServiceSpy {
  streamFile = jasmine.createSpy('streamFile');
  onStreamStart = jasmine.createSpy('onStreamStart').and.callFake(() => {
    return Observable.of();
  });
}
