import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectiononeComponent } from './home-sectionone.component';

describe('HomeSectiononeComponent', () => {
  let component: HomeSectiononeComponent;
  let fixture: ComponentFixture<HomeSectiononeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSectiononeComponent]
    });
    fixture = TestBed.createComponent(HomeSectiononeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
