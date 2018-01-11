import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithAssetComponent } from './button-with-asset.component';

describe('ButtonWithAssetComponent', () => {
  let component: ButtonWithAssetComponent;
  let fixture: ComponentFixture<ButtonWithAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonWithAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
