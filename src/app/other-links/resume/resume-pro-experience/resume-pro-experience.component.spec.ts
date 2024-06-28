import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeProExperienceComponent } from './resume-pro-experience.component';

describe('ResumeProExperienceComponent', () => {
  let component: ResumeProExperienceComponent;
  let fixture: ComponentFixture<ResumeProExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeProExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeProExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});