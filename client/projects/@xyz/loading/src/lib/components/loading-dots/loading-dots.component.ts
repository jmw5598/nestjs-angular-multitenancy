import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'xyz-loading-dots',
  templateUrl: './loading-dots.component.html',
  styleUrls: ['./loading-dots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingDotsComponent { }
