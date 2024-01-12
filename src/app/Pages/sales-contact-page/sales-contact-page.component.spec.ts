import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesContactPageComponent } from './sales-contact-page.component';

describe('SalesContactPageComponent', () => {
  let component: SalesContactPageComponent;
  let fixture: ComponentFixture<SalesContactPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesContactPageComponent]
    });
    fixture = TestBed.createComponent(SalesContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
