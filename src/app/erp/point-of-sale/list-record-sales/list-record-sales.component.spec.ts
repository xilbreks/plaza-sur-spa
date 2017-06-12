import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecordSalesComponent } from './list-record-sales.component';

describe('ListRecordSalesComponent', () => {
  let component: ListRecordSalesComponent;
  let fixture: ComponentFixture<ListRecordSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecordSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecordSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
