import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'xyz-logging-out',
  templateUrl: './logging-out.component.html',
  styleUrls: ['./logging-out.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggingOutComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this._router.navigate(['/auth', 'login']);
    }, 2000);
  }
}
