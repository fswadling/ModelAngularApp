import { TestBed } from '@angular/core/testing';

import { ExposuresListResolver } from './exposures-list-resolver';

describe('ExposuresListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExposuresListResolver = TestBed.get(ExposuresListResolver);
    expect(service).toBeTruthy();
  });
});
