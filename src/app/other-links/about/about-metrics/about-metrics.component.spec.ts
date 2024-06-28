import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMetricsComponent } from './about-metrics.component';

describe('AboutMetricsComponent', () => {
  let component: AboutMetricsComponent;
  let fixture: ComponentFixture<AboutMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
