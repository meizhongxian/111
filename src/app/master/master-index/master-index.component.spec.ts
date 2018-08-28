import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterIndexComponent } from './master-index.component';

describe('MasterIndexComponent', () => {
  let component: MasterIndexComponent;
  let fixture: ComponentFixture<MasterIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
