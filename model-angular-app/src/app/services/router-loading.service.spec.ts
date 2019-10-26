import { TestBed } from '@angular/core/testing';

import { RouterLoadingService } from './router-loading.service';

describe('RouterLoadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterLoadingService = TestBed.get(RouterLoadingService);
    expect(service).toBeTruthy();
  });
});
