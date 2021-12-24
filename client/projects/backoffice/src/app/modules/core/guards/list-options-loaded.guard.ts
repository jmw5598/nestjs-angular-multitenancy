import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { list } from 'postcss';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';

import { ListOptionsKeys } from '../models';
import { ListOptionsStore } from '../stores/list-options.store';

@Injectable({
  providedIn: 'root'
})
export class ListOptionsLoadedGuard implements CanActivate {
  constructor(
    private _listOptionsStore: ListOptionsStore
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const listOptionsKeys: ListOptionsKeys[] = route.data.listOptionsKeys;
    console.log("list options keys from route data", listOptionsKeys);
    return this._getListOptionsFromStoreOrApi(listOptionsKeys)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
  
  private _getListOptionsFromStoreOrApi(keys: ListOptionsKeys[]): Observable<boolean> {
    // return of(true);

    return this._listOptionsStore.onStateChanges()
      .pipe(
        tap(state => {
          console.log("check for undefined options")
          keys.forEach(key => {
            if (!state[key]) {
              this._listOptionsStore.getListOptionsByKey(key);
            }
          })
        }),
        map(state => keys.map(key => state[key])),
        filter(states => states.some(state => !!state)),
        map(states => true),
        take(1)
      )
  }
}
