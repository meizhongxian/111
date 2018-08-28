import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterApprovalComponent } from './master-approval.component';

describe('MasterApprovalComponent', () => {
  let component: MasterApprovalComponent;
  let fixture: ComponentFixture<MasterApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
