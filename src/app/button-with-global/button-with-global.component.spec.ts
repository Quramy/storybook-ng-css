import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithGlobalComponent } from './button-with-global.component';

describe('ButtonWithGlobalComponent', () => {
  let component: ButtonWithGlobalComponent;
  let fixture: ComponentFixture<ButtonWithGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonWithGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
