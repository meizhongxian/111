import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicExpertListComponent } from './public-expert-list.component';

describe('PublicExpertListComponent', () => {
  let component: PublicExpertListComponent;
  let fixture: ComponentFixture<PublicExpertListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicExpertListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicExpertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
