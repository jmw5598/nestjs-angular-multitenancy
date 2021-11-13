import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

import { DEFAULT_NAVIGATION_LINKS } from './navbar-links.mock';
  
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  public links: NavigationLink[] = DEFAULT_NAVIGATION_LINKS;

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
}
