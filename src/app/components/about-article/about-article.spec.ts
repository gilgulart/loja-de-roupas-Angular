import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutArticle } from './about-article';

describe('AboutArticle', () => {
  let component: AboutArticle;
  let fixture: ComponentFixture<AboutArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutArticle],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
