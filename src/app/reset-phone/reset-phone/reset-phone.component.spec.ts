import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPhoneComponent } from './reset-phone.component';

describe('ResetPhoneComponent', () => {
  let component: ResetPhoneComponent;
  let fixture: ComponentFixture<ResetPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
