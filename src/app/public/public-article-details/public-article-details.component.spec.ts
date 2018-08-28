import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicArticleDetailsComponent } from './public-article-details.component';

describe('PublicArticleDetailsComponent', () => {
  let component: PublicArticleDetailsComponent;
  let fixture: ComponentFixture<PublicArticleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicArticleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicArticleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
