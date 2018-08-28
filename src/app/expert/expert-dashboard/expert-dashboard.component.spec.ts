import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertDashboardComponent } from './expert-dashboard.component';

describe('ExpertDashboardComponent', () => {
  let component: ExpertDashboardComponent;
  let fixture: ComponentFixture<ExpertDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
