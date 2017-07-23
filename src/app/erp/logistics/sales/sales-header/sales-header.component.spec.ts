import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesHeaderComponent } from './sales-header.component';

describe('SalesHeaderComponent', () => {
  let component: SalesHeaderComponent;
  let fixture: ComponentFixture<SalesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
