import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHeroComponent } from './service-hero.component';

describe('ServiceHeroComponent', () => {
  let component: ServiceHeroComponent;
  let fixture: ComponentFixture<ServiceHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceHeroComponent]
    });
    fixture = TestBed.createComponent(ServiceHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
