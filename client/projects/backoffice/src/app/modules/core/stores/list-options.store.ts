import { Inject, Injectable } from "@angular/core";
import { AbstractStore } from '@xyz/core';
import { take } from 'rxjs/operators';
import { ListOption, ListOptionsKeys } from '../models';
import { ListOptionsService } from '../services/list-options.service';

export interface ListOptionsState {
  [key: string]: ListOption<any>[]
}

export const initialListOptionsState: ListOptionsState = { };

@Injectable({
  providedIn: 'root'
})
export class ListOptionsStore extends AbstractStore<ListOptionsState> {
  constructor(private _listOptionsService: ListOptionsService) {
    super({ ...initialListOptionsState });
  }

  public getListOptionsByKey(key: ListOptionsKeys): void {
    this._listOptionsService.getListOptionsByKey(key)
      .pipe(take(1))
      .subscribe(options => {
        this.setState({
          ...this._state,
          [key]: options
        });
      })
  }

  public resetState(): void {
    throw new Error('Method not implemented.');
  }
}
