import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertReviewComponent } from './expert-review.component';

describe('ExpertReviewComponent', () => {
  let component: ExpertReviewComponent;
  let fixture: ComponentFixture<ExpertReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
