import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesContactComponent } from './sales-contact.component';

describe('SalesContactComponent', () => {
  let component: SalesContactComponent;
  let fixture: ComponentFixture<SalesContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesContactComponent]
    });
    fixture = TestBed.createComponent(SalesContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
