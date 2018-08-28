import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertIndexComponent } from './expert-index.component';

describe('ExpertIndexComponent', () => {
  let component: ExpertIndexComponent;
  let fixture: ComponentFixture<ExpertIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
