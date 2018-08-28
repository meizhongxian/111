import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterStatisticsComponent } from './master-statistics.component';

describe('MasterStatisticsComponent', () => {
  let component: MasterStatisticsComponent;
  let fixture: ComponentFixture<MasterStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
