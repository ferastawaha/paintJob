import { TestBed } from '@angular/core/testing';

import { ShopPerformanceService } from './shop-performance.service';

describe('ShopPerformanceService', () => {
  let service: ShopPerformanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopPerformanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
