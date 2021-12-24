import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { SplitPanelMenuExtensionService, SplitPanelMenuExtensionState } from '../split-panel-menu-extension.service';

@Component({
  selector: 'xyz-split-panel-with-menu',
  templateUrl: './split-panel-with-menu.component.html',
  styleUrls: ['./split-panel-with-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitPanelWithMenuComponent implements OnInit {
  @HostBinding('class')
  public get hostClasses(): string {
    return 'split-panel flex flex-row w-100';
  }

  public sidePanelState$!: Observable<SplitPanelMenuExtensionState>;

  constructor(private _extensionService: SplitPanelMenuExtensionService) {
    this._selectState();
  }

  ngOnInit(): void { }

  private _selectState(): void {
    this.sidePanelState$ = this._extensionService.onStateChanges();
  }
}
