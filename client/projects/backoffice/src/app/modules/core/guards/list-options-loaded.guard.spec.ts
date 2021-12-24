import { TestBed } from '@angular/core/testing';

import { ListOptionsLoadedGuard } from './list-options-loaded.guard';

describe('ListOptionsLoadedGuard', () => {
  let guard: ListOptionsLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ListOptionsLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
