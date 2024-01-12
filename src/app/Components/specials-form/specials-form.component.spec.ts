import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsFormComponent } from './specials-form.component';

describe('SpecialsFormComponent', () => {
  let component: SpecialsFormComponent;
  let fixture: ComponentFixture<SpecialsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialsFormComponent]
    });
    fixture = TestBed.createComponent(SpecialsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
