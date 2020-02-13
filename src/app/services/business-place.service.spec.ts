import { TestBed } from '@angular/core/testing';

import { BusinessPlaceService } from './business-place.service';

describe('BusinessPlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessPlaceService = TestBed.get(BusinessPlaceService);
    expect(service).toBeTruthy();
  });
});
