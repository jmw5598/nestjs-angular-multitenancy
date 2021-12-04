import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { OverlayComponent } from '../components/overlay/overlay.component';
import { DialogRef } from '../models/dialog-ref.model';

@Injectable()
export class XyzDialogService {
  private _dialogList: DialogRef[] = [];

  constructor(
    private overlay: Overlay, 
    private injector: Injector
  ) { }

  public open<R = any, T = any>(content: string | TemplateRef<any> | Type<any>, data: T): DialogRef<R> {
    const configs = new OverlayConfig({
      hasBackdrop: false,
      panelClass: ['modal', 'is-active'],
    });

    const overlayRef = this.overlay.create(configs);

    const myOverlayRef = new DialogRef<R, T>(overlayRef, content, data);

    const injector = this.createInjector(myOverlayRef, this.injector);
    overlayRef.attach(new ComponentPortal(OverlayComponent, null, injector));

    return myOverlayRef;
  }

  public createInjector(ref: DialogRef, inj: Injector) {
    const injectorTokens = new WeakMap([[DialogRef, ref]]);
    return new PortalInjector(inj, injectorTokens);
  }
}
