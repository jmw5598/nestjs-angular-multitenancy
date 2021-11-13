import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './pages/application/application.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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

@NgModule({
  declarations: [
    ApplicationComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
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
  ]
})
export class ApplicationModule { }
