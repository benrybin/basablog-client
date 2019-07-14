import { TestBed } from '@angular/core/testing';

import { CommentConnectService } from './comment-connect.service';

describe('CommentConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentConnectService = TestBed.get(CommentConnectService);
    expect(service).toBeTruthy();
  });
});
