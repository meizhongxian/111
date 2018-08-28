import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCMSComponent } from './master-cms.component';

describe('MasterCMSComponent', () => {
  let component: MasterCMSComponent;
  let fixture: ComponentFixture<MasterCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
