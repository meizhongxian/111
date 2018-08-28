import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCreateProvinceReviewComponent } from './master-create-province-review.component';

describe('MasterCreateProvinceReviewComponent', () => {
  let component: MasterCreateProvinceReviewComponent;
  let fixture: ComponentFixture<MasterCreateProvinceReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCreateProvinceReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCreateProvinceReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
