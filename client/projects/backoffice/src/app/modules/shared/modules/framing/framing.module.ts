import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitPanelWithMenuComponent } from './components/split-panel-with-menu/split-panel-with-menu.component';
import { SplitPanelMenuExtensionService } from './components/split-panel-menu-extension.service';

@NgModule({
  declarations: [
    SplitPanelWithMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SplitPanelWithMenuComponent
  ],
  providers: [
    SplitPanelMenuExtensionService
  ]
})
export class XyzFramingModule { }
