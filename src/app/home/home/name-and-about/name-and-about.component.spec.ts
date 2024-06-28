import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAndAboutComponent } from './name-and-about.component';

describe('NameAndAboutComponent', () => {
  let component: NameAndAboutComponent;
  let fixture: ComponentFixture<NameAndAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameAndAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameAndAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
