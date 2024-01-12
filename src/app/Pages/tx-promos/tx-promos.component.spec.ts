import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxPromosComponent } from './tx-promos.component';

describe('TxPromosComponent', () => {
  let component: TxPromosComponent;
  let fixture: ComponentFixture<TxPromosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TxPromosComponent]
    });
    fixture = TestBed.createComponent(TxPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
