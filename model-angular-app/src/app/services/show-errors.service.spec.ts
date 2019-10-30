import { TestBed } from '@angular/core/testing';

import { ShowErrorsService } from './show-errors.service';

describe('ShowErrorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowErrorsService = TestBed.get(ShowErrorsService);
    expect(service).toBeTruthy();
  });
});
