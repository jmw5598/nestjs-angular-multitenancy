import { NavigationLink } from './components/navbar/navbar.component';

const dashboardLinks: NavigationLink = {
  label: 'Dashboard',
  isExpanded: false,
  children: [
    {
      label: 'Overview',
      description: 'Get a better understanding of where your traffic is coming from.',
      routerLink: '',
      iconName: 'hero-chart-bar'
    },
    {
      label: 'Calendar',
      description: 'Company events, blah, stuff.',
      routerLink: '',
      iconName: 'hero-calendar'
    },
    {
      label: 'Notification',
      description: 'Your notfications; Lorem ipsum dolor sit amet consectetur adipi.',
      routerLink: '',
      iconName: 'hero-bell'
    },
    {
      label: 'Open Jobs',
      description: 'Current open jobs, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem rerum repellendus incidunt vitae.',
      routerLink: '',
      iconName: 'hero-chart-bar'
    },
    {
      label: 'Profile',
      description: 'Modify and change your profile details. Lorem ipsum.',
      routerLink: '',
      iconName: 'hero-user'
    }
  ]
}

export const DEFAULT_NAVIGATION_LINKS: NavigationLink[] = [
  dashboardLinks
];
