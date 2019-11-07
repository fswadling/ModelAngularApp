import { TestBed } from '@angular/core/testing';

import { CreateProjectFormService } from './create-project-form.service';

describe('CreateProjectFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateProjectFormService = TestBed.get(CreateProjectFormService);
    expect(service).toBeTruthy();
  });
});
