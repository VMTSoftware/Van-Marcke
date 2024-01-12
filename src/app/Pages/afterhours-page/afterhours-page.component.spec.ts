import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterhoursPageComponent } from './afterhours-page.component';

describe('AfterhoursPageComponent', () => {
  let component: AfterhoursPageComponent;
  let fixture: ComponentFixture<AfterhoursPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterhoursPageComponent]
    });
    fixture = TestBed.createComponent(AfterhoursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
