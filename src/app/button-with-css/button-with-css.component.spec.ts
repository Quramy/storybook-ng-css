import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithCssComponent } from './button-with-css.component';

describe('ButtonWithCssComponent', () => {
  let component: ButtonWithCssComponent;
  let fixture: ComponentFixture<ButtonWithCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonWithCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
