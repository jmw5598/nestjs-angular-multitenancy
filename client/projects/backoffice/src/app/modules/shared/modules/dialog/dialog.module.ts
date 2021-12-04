import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';
import { XyzDialogService } from './services/dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    OverlayComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ]
})
export class XyzDialogModule {
  public static forRoot(): ModuleWithProviders<XyzDialogModule> {
    return {
      ngModule: XyzDialogModule,
      providers: [
        XyzDialogService
      ]
    }
  }
}
