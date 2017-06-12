import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecordSaleComponent } from './detail-record-sale.component';

describe('DetailRecordSaleComponent', () => {
  let component: DetailRecordSaleComponent;
  let fixture: ComponentFixture<DetailRecordSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRecordSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecordSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
