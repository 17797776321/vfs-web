import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineretailersComponent } from './onlineretailers.component';

describe('OnlineretailersComponent', () => {
  let component: OnlineretailersComponent;
  let fixture: ComponentFixture<OnlineretailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineretailersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineretailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
