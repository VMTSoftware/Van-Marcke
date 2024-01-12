import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrPageComponent } from './br-page.component';

describe('BrPageComponent', () => {
  let component: BrPageComponent;
  let fixture: ComponentFixture<BrPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrPageComponent]
    });
    fixture = TestBed.createComponent(BrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
