import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsPageComponent } from './specials-page.component';

describe('SpecialsPageComponent', () => {
  let component: SpecialsPageComponent;
  let fixture: ComponentFixture<SpecialsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialsPageComponent]
    });
    fixture = TestBed.createComponent(SpecialsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
