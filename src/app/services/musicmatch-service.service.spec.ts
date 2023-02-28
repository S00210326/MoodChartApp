import { TestBed } from '@angular/core/testing';

import { MusicmatchServiceService } from './musicmatch-service.service';

describe('MusicmatchServiceService', () => {
  let service: MusicmatchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicmatchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
