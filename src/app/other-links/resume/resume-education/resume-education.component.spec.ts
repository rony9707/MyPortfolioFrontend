import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEducationComponent } from './resume-education.component';

describe('ResumeEducationComponent', () => {
  let component: ResumeEducationComponent;
  let fixture: ComponentFixture<ResumeEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
