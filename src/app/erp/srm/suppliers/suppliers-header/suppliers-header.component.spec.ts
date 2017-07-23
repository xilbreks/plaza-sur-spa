import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersHeaderComponent } from './suppliers-header.component';

describe('SuppliersHeaderComponent', () => {
  let component: SuppliersHeaderComponent;
  let fixture: ComponentFixture<SuppliersHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
