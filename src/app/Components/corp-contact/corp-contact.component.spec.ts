import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpContactComponent } from './corp-contact.component';

describe('CorpContactComponent', () => {
  let component: CorpContactComponent;
  let fixture: ComponentFixture<CorpContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorpContactComponent]
    });
    fixture = TestBed.createComponent(CorpContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
