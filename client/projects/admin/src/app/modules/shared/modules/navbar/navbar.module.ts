import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarBrandingComponent } from './components/navbar-branding/navbar-branding.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { NgIconsModule } from '@ng-icons/core';

import { 
  HeroCalendar, 
  HeroChartBar, 
  HeroChevronDown,
  HeroBell,
  HeroFolder,
  HeroUser,
  HeroMail,
  HeroOfficeBuilding,
  HeroLogout
} from '@ng-icons/heroicons';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarBrandingComponent,
    NavbarMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({
      HeroCalendar,
      HeroChevronDown,
      HeroChartBar,
      HeroBell,
      HeroFolder,
      HeroUser,
      HeroMail,
      HeroOfficeBuilding,
      HeroLogout
    })
  ],
  exports: [
    NavbarComponent,
    NavbarBrandingComponent,
    NavbarMenuComponent
  ]
})
export class XyzNavbarModule { }
