import { TestBed, inject } from '@angular/core/testing';

import { RecordSalesService } from './record-sales.service';

describe('RecordSalesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordSalesService]
    });
  });

  it('should be created', inject([RecordSalesService], (service: RecordSalesService) => {
    expect(service).toBeTruthy();
  }));
});
