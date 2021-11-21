import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
