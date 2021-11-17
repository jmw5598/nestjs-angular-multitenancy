import { NavigationLink } from './components/navbar/navbar.component';

const dashboardLinks: NavigationLink = {
  label: 'Dashboard',
  isExpanded: false,
  routerLink: '/dashboard',
  iconName: 'hero-chart-bar'
}

const crmLinks: NavigationLink = {
  label: 'CRM',
  isExpanded: false,
  children: [
    {
      label: 'Accounts',
      description: 'Get a better understanding of where your traffic is coming from.',
      routerLink: '/crm/accounts',
      iconName: 'hero-collection'
    },
    {
      label: 'Contacts',
      description: 'Get a better understanding of where your traffic is coming from.',
      routerLink: '/crm/contacts',
      iconName: 'hero-user-group'
    },
    {
      label: 'Leads',
      description: 'Get a better understanding of where your traffic is coming from.',
      routerLink: '/crm/leads',
      iconName: 'hero-folder-open'
    },
    {
      label: 'Estimates',
      description: 'Get a better understanding of where your traffic is coming from.',
      routerLink: '/crm/estimates',
      iconName: 'hero-currency-dollar'
    }
  ]
}

const calendarLinks: NavigationLink = {
  label: 'Calendar',
  description: 'Get a better understanding of where your traffic is coming from.',
  routerLink: '/calendar',
  iconName: 'hero-chart-bar'
}

export const DEFAULT_NAVIGATION_LINKS: NavigationLink[] = [
  dashboardLinks,
  crmLinks,
  calendarLinks
];
