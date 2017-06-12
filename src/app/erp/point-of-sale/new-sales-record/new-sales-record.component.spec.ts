import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalesRecordComponent } from './new-sales-record.component';

describe('NewSalesRecordComponent', () => {
  let component: NewSalesRecordComponent;
  let fixture: ComponentFixture<NewSalesRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSalesRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSalesRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
