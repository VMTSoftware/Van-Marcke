import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceFormPageComponent } from './resource-form-page.component';

describe('ResourceFormPageComponent', () => {
  let component: ResourceFormPageComponent;
  let fixture: ComponentFixture<ResourceFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceFormPageComponent]
    });
    fixture = TestBed.createComponent(ResourceFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
