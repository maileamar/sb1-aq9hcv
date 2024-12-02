import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  UserGroupIcon,
  UsersIcon,
  CreditCardIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Overview', href: '/client/dashboard', icon: HomeIcon },
  { name: 'Hiring Progress', href: '/client/hiring', icon: UserGroupIcon },
  { name: 'Team', href: '/client/team', icon: UsersIcon },
  { name: 'Invoices', href: '/client/invoices', icon: CreditCardIcon },
  { name: 'Settings', href: '/client/settings', icon: Cog6ToothIcon },
];

const DashboardLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-red-800">
        <div className="flex h-16 items-center justify-center">
          <h1 className="text-white text-xl font-bold">Client Dashboard</h1>
        </div>
        <nav className="mt-5 px-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  group flex items-center px-2 py-2 text-base font-medium rounded-md mb-1
                  ${isActive 
                    ? 'bg-red-900 text-white' 
                    : 'text-red-100 hover:bg-red-700'}
                `}
              >
                <item.icon 
                  className={`mr-4 h-6 w-6 flex-shrink-0 ${
                    isActive ? 'text-white' : 'text-red-200'
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;