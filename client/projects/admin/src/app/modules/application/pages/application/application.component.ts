import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationLink } from '../../components/navbar/navbar.component';
import { DEFAULT_NAVIGATION_LINKS } from '../../application-navigation-links.defaults';

@Component({
  selector: 'xyz-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationComponent implements OnInit {
  public links: NavigationLink[] = DEFAULT_NAVIGATION_LINKS;

  constructor() { }

  ngOnInit(): void {
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
