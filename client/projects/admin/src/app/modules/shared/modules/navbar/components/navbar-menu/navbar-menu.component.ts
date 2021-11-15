import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'xyz-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
