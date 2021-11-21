import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitPanelWithMenuComponent } from './split-panel-with-menu.component';

describe('SplitPanelWithMenuComponent', () => {
  let component: SplitPanelWithMenuComponent;
  let fixture: ComponentFixture<SplitPanelWithMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitPanelWithMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitPanelWithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
