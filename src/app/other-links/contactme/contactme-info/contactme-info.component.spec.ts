import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmeInfoComponent } from './contactme-info.component';

describe('ContactmeInfoComponent', () => {
  let component: ContactmeInfoComponent;
  let fixture: ComponentFixture<ContactmeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactmeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
