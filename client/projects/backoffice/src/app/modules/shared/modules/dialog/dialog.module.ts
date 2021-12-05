import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';
import { XyzDialogService } from './services/dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { XyzConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    OverlayComponent,
    XyzConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    XyzConfirmationDialogComponent
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
