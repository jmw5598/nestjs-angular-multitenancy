import { TestBed } from '@angular/core/testing';

import { SplitPanelMenuExtensionService } from './split-panel-menu-extension.service';

describe('SplitPanelMenuExtensionService', () => {
  let service: SplitPanelMenuExtensionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplitPanelMenuExtensionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
