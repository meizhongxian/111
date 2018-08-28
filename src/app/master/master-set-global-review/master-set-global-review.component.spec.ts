import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSetGlobalReviewComponent } from './master-set-global-review.component';

describe('MasterSetGlobalReviewComponent', () => {
  let component: MasterSetGlobalReviewComponent;
  let fixture: ComponentFixture<MasterSetGlobalReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterSetGlobalReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterSetGlobalReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
