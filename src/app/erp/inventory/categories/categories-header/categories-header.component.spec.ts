import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesHeaderComponent } from './categories-header.component';

describe('CategoriesHeaderComponent', () => {
  let component: CategoriesHeaderComponent;
  let fixture: ComponentFixture<CategoriesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
