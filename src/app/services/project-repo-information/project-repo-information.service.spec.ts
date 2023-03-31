import { TestBed } from '@angular/core/testing';

import { ProjectRepoInformationService } from './project-repo-information.service';

describe('ProjectRepoInformationService', () => {
  let service: ProjectRepoInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectRepoInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
