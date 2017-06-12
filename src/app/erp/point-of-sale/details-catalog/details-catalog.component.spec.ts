import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCatalogComponent } from './details-catalog.component';

describe('DetailsCatalogComponent', () => {
  let component: DetailsCatalogComponent;
  let fixture: ComponentFixture<DetailsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
