'use client';

import { useRouter } from 'next/navigation';
import { navigation } from '../utils/data';
import { classNames } from '@/utils/helpers';
import SidebarDropdown from './SidebarDropdown';
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          {/* Regular navigation items */}

          {/* Customer Section with Dropdown */}
          <SidebarDropdown title="Customer" icon={UsersIcon}>
            <ul role="list" className="flex flex-col gap-y-2">
              <li>
                <a
                  href="/addCustomer"
                  className={classNames(
                    router.pathname === '/addCustomer'
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600',
                    'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold'
                  )}
                >
                  Add Customer
                </a>
              </li>
              <li>
                <a
                  href="/allCustomerInfo"
                  className={classNames(
                    router.pathname === '/allCustomerInfo'
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600',
                    'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold'
                  )}
                >
                  All Customer Info
                </a>
              </li>
            </ul>
          </SidebarDropdown>

          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  router.pathname === item.href
                    ? 'bg-gray-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                  'group flex gap-x-3 rounded-md p-2 text-sm font-semibold'
                )}
              >
                <item.icon
                  aria-hidden="true"
                  className={classNames(
                    router.pathname === item.href
                      ? 'text-indigo-600'
                      : 'text-gray-400 group-hover:text-indigo-600',
                    'h-6 w-6 shrink-0'
                  )}
                />
                {item.name}
              </a>
            </li>
          ))}

          

          <li className="mt-auto">
            <a
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              <Cog6ToothIcon
                aria-hidden="true"
                className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
              />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
