import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMenuSetComponent } from './icon-menu-set.component';

describe('IconMenuSetComponent', () => {
  let component: IconMenuSetComponent;
  let fixture: ComponentFixture<IconMenuSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconMenuSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMenuSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
