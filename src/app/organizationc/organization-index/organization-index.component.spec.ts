import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationIndexComponent } from './organization-index.component';

describe('OrganizationIndexComponent', () => {
  let component: OrganizationIndexComponent;
  let fixture: ComponentFixture<OrganizationIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
