import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardexComponent } from './cardex.component';

describe('CardexComponent', () => {
  let component: CardexComponent;
  let fixture: ComponentFixture<CardexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
