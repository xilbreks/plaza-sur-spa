import { TestBed, inject } from '@angular/core/testing';

import { BiService } from './bi.service';

describe('BiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BiService]
    });
  });

  it('should be created', inject([BiService], (service: BiService) => {
    expect(service).toBeTruthy();
  }));
});
