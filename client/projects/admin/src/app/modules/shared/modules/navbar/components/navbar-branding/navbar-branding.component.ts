import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'xyz-navbar-branding',
  templateUrl: './navbar-branding.component.html',
  styleUrls: ['./navbar-branding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex justify-start'
  }
})
export class NavbarBrandingComponent {
  @Input()
  public logoSrc: string = '';

  @Input()
  public logoUrl: string = '';
}
