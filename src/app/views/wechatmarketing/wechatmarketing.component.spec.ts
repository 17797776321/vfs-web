import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WechatmarketingComponent } from './wechatmarketing.component';

describe('WechatmarketingComponent', () => {
  let component: WechatmarketingComponent;
  let fixture: ComponentFixture<WechatmarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WechatmarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WechatmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
