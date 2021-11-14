import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationStore } from '@xyz/admin/modules/core/store/authentication.store';

@Component({
  selector: 'xyz-logging-out',
  templateUrl: './logging-out.component.html',
  styleUrls: ['./logging-out.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggingOutComponent implements OnInit {

  constructor(
    private _router: Router,
    private _authenticationStore: AuthenticationStore
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this._authenticationStore.logoutUser();
      this._router.navigate(['/auth', 'login']);
    }, 2000);
  }
}
