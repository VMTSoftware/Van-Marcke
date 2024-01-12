import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvPromosComponent } from './nv-promos.component';

describe('NvPromosComponent', () => {
  let component: NvPromosComponent;
  let fixture: ComponentFixture<NvPromosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NvPromosComponent]
    });
    fixture = TestBed.createComponent(NvPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
