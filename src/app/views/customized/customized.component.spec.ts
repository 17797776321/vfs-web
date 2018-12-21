import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedComponent } from './customized.component';

describe('CustomizedComponent', () => {
  let component: CustomizedComponent;
  let fixture: ComponentFixture<CustomizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
