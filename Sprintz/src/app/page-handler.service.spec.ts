import { TestBed } from '@angular/core/testing';

import { PageHandlerService } from './page-handler.service';

describe('PageHandlerService', () => {
  let service: PageHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
