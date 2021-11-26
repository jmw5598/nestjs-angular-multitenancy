import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AbstractCrudService, CalendarEvent, EnvironmentService } from '@xyz/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarEventsService extends AbstractCrudService<CalendarEvent, number> {
  constructor(
    private _environmentService: EnvironmentService,
    protected _http: HttpClient
  ) {
    // @TODO Fix this (AbstractCrudService need to be reworked to handle subdomain)
    super(_http, `/calendar/events`)
  }

  public findBetweenDates(from: Date, to: Date): Observable<CalendarEvent[]> {
    const baseUrl: string = this._environmentService.getApiBaseUrl();
    const queryParams: {[key: string]: any} = {
      startDate: from.toISOString(),
      endDate: to.toISOString()
    };
    return this._http.get<CalendarEvent[]>(
      `${baseUrl}/calendar/events/between`, 
      { params: queryParams }
    );
  }
}
