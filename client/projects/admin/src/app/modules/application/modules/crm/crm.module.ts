import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './pages/accounts/accounts.component';

import { CrmRoutingModule } from './crm-routing.module';

@NgModule({
  declarations: [
    AccountsComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule
  ]
})
export class CrmModule { }
