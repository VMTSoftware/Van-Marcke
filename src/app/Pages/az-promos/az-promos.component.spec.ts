import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzPromosComponent } from './az-promos.component';

describe('AzPromosComponent', () => {
  let component: AzPromosComponent;
  let fixture: ComponentFixture<AzPromosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzPromosComponent]
    });
    fixture = TestBed.createComponent(AzPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
