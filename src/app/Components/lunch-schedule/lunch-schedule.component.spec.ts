import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchScheduleComponent } from './lunch-schedule.component';

describe('LunchScheduleComponent', () => {
  let component: LunchScheduleComponent;
  let fixture: ComponentFixture<LunchScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunchScheduleComponent]
    });
    fixture = TestBed.createComponent(LunchScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
