import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

import { fadeAnimation } from '@xyz/core';

import { DEFAULT_NAVIGATION_LINKS } from '../../application-navigation-links.defaults';
  
export interface NavigationLink {
  label: string,
  description?: string,
  routerLink?: string | string[],
  iconName?: string,
  isExpanded?: boolean
  children?: NavigationLink[]
}

@Component({
  selector: 'xyz-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation]
})
export class NavbarComponent implements OnInit {
  @HostBinding('class')
  public get hostClasses(): string {
    return 'navbar';
  }

  @Input()
  public logoSrc: string = '';

  @Input()
  public logoRouterLink: string = '';
  
  public links: NavigationLink[] = DEFAULT_NAVIGATION_LINKS;

  public isMobileShown: boolean = false;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    fromEvent(window, 'click')
      .subscribe(event => {
        this.links.forEach(e => e.isExpanded = false);
        this._changeDetectorRef.markForCheck();
      });
  }

  public expandLink($event: any, link: NavigationLink): void {
    $event.stopPropagation();
    if (link.isExpanded) {
      link.isExpanded = false;
      return;
    }
    this.links.forEach(link => link.isExpanded = false);
    link.isExpanded = !link.isExpanded;
  }

  public toggleMobile(): void {
    this.isMobileShown = !this.isMobileShown;
  }
}
