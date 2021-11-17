import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'xyz-navbar-branding',
  templateUrl: './navbar-branding.component.html',
  styleUrls: ['./navbar-branding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarBrandingComponent {
  @HostBinding('class')
  public hostClasses: string = 'flex justify-start';
  @Input()
  public logoSrc: string = '';

  @Input()
  public logoUrl: string = '';
}
