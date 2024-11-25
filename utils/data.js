import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Customer', href: '#', icon: UsersIcon, children: [
      { name: 'Add Customer', href: '/addCustomer', icon: UsersIcon },
      { name: 'All Customer Info', href: '/allCustomerInfo', icon: FolderIcon },
    ]
  },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
  { name: 'Documents', href: '/documents', icon: DocumentDuplicateIcon },
  { name: 'Reports', href: '/reports', icon: ChartPieIcon },
];

export const customersData = [
  {
    id: 1,
    name: 'John Doe',
    type: 'Individual',
    status: 'Live',
    countryOfRegistration: 'USA',
    companyRegistrationNumber: '123456789',
    stockSymbol: 'JD',
    companyWebsite: 'https://johndoe.com',
    dealsWith: 'Retail',
    internalRepresentative: 'Jane Smith',
    relationshipSince: '2020-01-15',
    mainContactPerson: 'John Doe',
    officialEmail: 'john@example.com',
    secondaryEmail: 'john.secondary@example.com',
    mobileNumber: '+1 123-456-7890',
  },
  {
    id: 2,
    name: 'Jane Smith',
    type: 'Business',
    status: 'Inactive',
    countryOfRegistration: 'Canada',
    companyRegistrationNumber: '987654321',
    stockSymbol: 'JS',
    companyWebsite: 'https://janesmith.com',
    dealsWith: 'Finance',
    internalRepresentative: 'John Doe',
    relationshipSince: '2019-05-22',
    mainContactPerson: 'Jane Smith',
    officialEmail: 'jane@example.com',
    secondaryEmail: 'jane.secondary@example.com',
    mobileNumber: '+1 098-765-4321',
  },
];

export const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];

export const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
];
