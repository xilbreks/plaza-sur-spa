import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersHeaderComponent } from './customers-header.component';

describe('CustomersHeaderComponent', () => {
  let component: CustomersHeaderComponent;
  let fixture: ComponentFixture<CustomersHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
