import { TestBed } from '@angular/core/testing';

import { ListOptionsService } from './list-options.service';

describe('ListOptionsService', () => {
  let service: ListOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
