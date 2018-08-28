import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertMasterComponent } from './expert-master.component';

describe('ExpertMasterComponent', () => {
  let component: ExpertMasterComponent;
  let fixture: ComponentFixture<ExpertMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
