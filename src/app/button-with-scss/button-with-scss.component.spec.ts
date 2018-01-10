import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithScssComponent } from './button-with-scss.component';

describe('ButtonWithScssComponent', () => {
  let component: ButtonWithScssComponent;
  let fixture: ComponentFixture<ButtonWithScssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonWithScssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
