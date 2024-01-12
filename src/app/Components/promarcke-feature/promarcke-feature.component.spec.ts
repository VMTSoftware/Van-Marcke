import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromarckeFeatureComponent } from './promarcke-feature.component';

describe('PromarckeFeatureComponent', () => {
  let component: PromarckeFeatureComponent;
  let fixture: ComponentFixture<PromarckeFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromarckeFeatureComponent]
    });
    fixture = TestBed.createComponent(PromarckeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
