import { Observable, Subject } from 'rxjs';
import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef, Type } from '@angular/core';

// https://github.com/mainawycliffe/ng-cdk-overlay-demo/tree/master/src/app

export interface DialogCloseEvent<R> {
  type: 'backdropClick' | 'close';
  data: R | undefined;
}

// R = Response Data Type, T = Data passed to Modal Type
export class DialogRef<R = any, T = any> {
  afterClosed$ = new Subject<DialogCloseEvent<R | undefined | null>>();

  constructor(
    public overlay: OverlayRef,
    public content: string | TemplateRef<any> | Type<any>,
    public data: T // pass data to modal i.e. FormData
  ) {
    overlay.backdropClick().subscribe(() => this._close('backdropClick', null));
  }

  public close(data?: R | undefined | null) {
    this._close('close', data);
  }

  public onClose(): Observable<DialogCloseEvent<R | undefined | null>> {
    return this.afterClosed$.asObservable();
  }

  private _close(type: 'backdropClick' | 'close', data: R | undefined | null) {
    this.overlay.dispose();
    this.afterClosed$.next({
      type,
      data
    });

    this.afterClosed$.complete();
  }
}
