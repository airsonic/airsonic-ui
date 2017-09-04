import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
