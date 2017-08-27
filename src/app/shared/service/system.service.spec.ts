import { TestBed, inject } from '@angular/core/testing';

import { SystemService } from './system.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';

describe('SystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([SystemService], (service: SystemService) => {
    expect(service).toBeTruthy();
  }));
});

export class SystemServiceSpy {
  ping = jasmine.createSpy('ping').and.callFake(() => {
    return Observable.of();
  });
}
