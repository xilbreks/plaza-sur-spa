import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSetComponent } from './menu-set.component';

describe('MenuSetComponent', () => {
  let component: MenuSetComponent;
  let fixture: ComponentFixture<MenuSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
