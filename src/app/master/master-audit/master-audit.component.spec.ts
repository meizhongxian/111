import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAuditComponent } from './master-audit.component';

describe('MasterAuditComponent', () => {
  let component: MasterAuditComponent;
  let fixture: ComponentFixture<MasterAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
