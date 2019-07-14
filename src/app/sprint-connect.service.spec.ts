import { TestBed } from '@angular/core/testing';

import { SprintConnectService } from './sprint-connect.service';

describe('SprintConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SprintConnectService = TestBed.get(SprintConnectService);
    expect(service).toBeTruthy();
  });
});
