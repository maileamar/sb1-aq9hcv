import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500 relative">
              <FaBell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white" />
            </button>
            <div className="flex items-center">
              <button className="flex items-center space-x-3 text-sm focus:outline-none">
                <FaUserCircle className="h-8 w-8 text-gray-400" />
                <span className="hidden md:block font-medium text-gray-700">John Smith</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;