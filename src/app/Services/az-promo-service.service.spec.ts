import { TestBed } from '@angular/core/testing';

import { AzPromoServiceService } from './az-promo-service.service';

describe('AzPromoServiceService', () => {
  let service: AzPromoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzPromoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
