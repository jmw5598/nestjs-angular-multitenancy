import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DialogRef } from '../../models/dialog-ref.model';

@Component({
  selector: 'xyz-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XyzConfirmationDialogComponent implements OnInit {

  @Input()
  public headerText: string = 'Testing';

  @Input()
  public confirmationText: string = 'Testing text';
  
  @Input()
  public confirmationButtonText: string = 'Confirm';
  
  @Input()
  public cancelButtonText: string = 'Close';

  constructor(
    private _dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
  }

  public confirm(): void {
    this._dialogRef.close(true);
  }

  public close(): void {
    this._dialogRef.close(false);
  }
}
