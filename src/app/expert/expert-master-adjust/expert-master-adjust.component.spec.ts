import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertMasterAdjustComponent } from './expert-master-adjust.component';

describe('ExpertMasterAdjustComponent', () => {
  let component: ExpertMasterAdjustComponent;
  let fixture: ComponentFixture<ExpertMasterAdjustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertMasterAdjustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertMasterAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
