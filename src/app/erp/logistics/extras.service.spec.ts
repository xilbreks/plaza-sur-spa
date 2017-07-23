import { TestBed, inject } from '@angular/core/testing';

import { ExtrasService } from './extras.service';

describe('ExtrasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtrasService]
    });
  });

  it('should be created', inject([ExtrasService], (service: ExtrasService) => {
    expect(service).toBeTruthy();
  }));
});
