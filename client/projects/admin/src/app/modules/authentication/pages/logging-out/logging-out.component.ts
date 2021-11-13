import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'xyz-logging-out',
  templateUrl: './logging-out.component.html',
  styleUrls: ['./logging-out.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggingOutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
