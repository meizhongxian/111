import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCreateActivityComponent } from './master-create-activity.component';

describe('MasterCreateActivityComponent', () => {
  let component: MasterCreateActivityComponent;
  let fixture: ComponentFixture<MasterCreateActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCreateActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCreateActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
