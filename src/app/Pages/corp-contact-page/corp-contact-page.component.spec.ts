import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpContactPageComponent } from './corp-contact-page.component';

describe('CorpContactPageComponent', () => {
  let component: CorpContactPageComponent;
  let fixture: ComponentFixture<CorpContactPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorpContactPageComponent]
    });
    fixture = TestBed.createComponent(CorpContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
