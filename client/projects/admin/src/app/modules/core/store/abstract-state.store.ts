import { BehaviorSubject, Observable } from 'rxjs';
import { deepFreeze } from '../utils/deep-freeze.util';

export abstract class AbstractStore<T> {
  protected _state: T;
  protected _stateSource: BehaviorSubject<T>;

  constructor(initialState: T) {
    this._state = deepFreeze(initialState);
    this._stateSource = new BehaviorSubject<T>(this._state);
  }

  public onStateChanges(): Observable<T> {
    return this._stateSource.asObservable();
  }

  public setState(state: T): void {
    this._state = deepFreeze(state);
    this._stateSource.next(this._state);
  }

  public abstract resetState(): void;
}