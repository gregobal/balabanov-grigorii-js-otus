import { TestBed } from '@angular/core/testing';

import { WordQueueService } from './word-queue.service';

describe('WordQueueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordQueueService = TestBed.get(WordQueueService);
    expect(service).toBeTruthy();
  });
});
