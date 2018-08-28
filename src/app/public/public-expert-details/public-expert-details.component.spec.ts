import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicExpertDetailsComponent } from './public-expert-details.component';

describe('PublicExpertDetailsComponent', () => {
  let component: PublicExpertDetailsComponent;
  let fixture: ComponentFixture<PublicExpertDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicExpertDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicExpertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
