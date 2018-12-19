import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemdevComponent } from './systemdev.component';

describe('SystemdevComponent', () => {
  let component: SystemdevComponent;
  let fixture: ComponentFixture<SystemdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
