import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMainPfpComponent } from './about-main-pfp.component';

describe('AboutMainPfpComponent', () => {
  let component: AboutMainPfpComponent;
  let fixture: ComponentFixture<AboutMainPfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMainPfpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMainPfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
