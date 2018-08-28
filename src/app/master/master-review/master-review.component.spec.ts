import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterReviewComponent } from './master-review.component';

describe('MasterReviewComponent', () => {
  let component: MasterReviewComponent;
  let fixture: ComponentFixture<MasterReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
