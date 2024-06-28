import { TestBed } from '@angular/core/testing';

import { ShareDataBasicService } from './share-data-basic.service';

describe('ShareDataBasicService', () => {
  let service: ShareDataBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDataBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
