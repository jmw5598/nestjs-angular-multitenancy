import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOptionsLoadedGuard } from '@xyz/backoffice/modules/core/guards/list-options-loaded.guard';
import { ListOptionsKeys } from '@xyz/backoffice/modules/core/models';

import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
    canActivate: [ListOptionsLoadedGuard],
    data: {
      listOptionsKeys: [
        ListOptionsKeys.USERS
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
