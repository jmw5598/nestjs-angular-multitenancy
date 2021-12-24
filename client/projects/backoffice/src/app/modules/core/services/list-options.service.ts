import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '@xyz/core';
import { Observable } from 'rxjs';
import { ListOption, ListOptionsKeys } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ListOptionsService {
  constructor(
    private _environmentService: EnvironmentService,
    private _http: HttpClient
  ) { }

  public getListOptionsByKey<T>(key: ListOptionsKeys): Observable<ListOption<T>[]> {
    return this._http.get<ListOption<T>[]>(
      `${this._environmentService.getApiBaseUrl()}/list-options/${key}`
    );
  }
}
