import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export enum SplitPanelMenuExtensionState {
  OPENED = 'opened',
  CLOSED = 'closed',
  PINNED = 'pinned'
}

@Injectable()
export class SplitPanelMenuExtensionService {
  private _state: SplitPanelMenuExtensionState = SplitPanelMenuExtensionState.CLOSED;
  private _stateSource: BehaviorSubject<SplitPanelMenuExtensionState> = new BehaviorSubject<SplitPanelMenuExtensionState>(this._state);

  constructor() { }

  public onStateChanges(): Observable<SplitPanelMenuExtensionState> {
    return this._stateSource.asObservable()
      .pipe(distinctUntilChanged());
  }

  public setState(state: SplitPanelMenuExtensionState): void {
    this._state = state;
    this._stateSource.next(this._state);
  }
}
