import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLinksComponent } from './grid-links.component';

describe('GridLinksComponent', () => {
  let component: GridLinksComponent;
  let fixture: ComponentFixture<GridLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridLinksComponent]
    });
    fixture = TestBed.createComponent(GridLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
