import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationCreateApplyforComponent } from './organization-create-applyfor.component';

describe('OrganizationCreateApplyforComponent', () => {
  let component: OrganizationCreateApplyforComponent;
  let fixture: ComponentFixture<OrganizationCreateApplyforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationCreateApplyforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationCreateApplyforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
