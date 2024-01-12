import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromarckePageComponent } from './promarcke-page.component';

describe('PromarckePageComponent', () => {
  let component: PromarckePageComponent;
  let fixture: ComponentFixture<PromarckePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromarckePageComponent]
    });
    fixture = TestBed.createComponent(PromarckePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
