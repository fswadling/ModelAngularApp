import { TestBed } from '@angular/core/testing';

import { ProjectResolver } from './project-resolver';

describe('ProjectResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectResolver = TestBed.get(ProjectResolver);
    expect(service).toBeTruthy();
  });
});
