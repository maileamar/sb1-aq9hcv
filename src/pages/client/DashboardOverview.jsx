import React from 'react';
import { FaUsers, FaFileContract, FaMoneyBillWave, FaUserClock } from 'react-icons/fa';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import StatCard from '../../components/dashboard/StatCard';
import RecentActivity from '../../components/dashboard/RecentActivity';
import HiringMetrics from '../../components/dashboard/HiringMetrics';

const DashboardOverview = () => {
  const stats = [
    {
      title: 'Active Candidates',
      value: '24',
      icon: FaUsers,
      color: 'bg-blue-500',
      trend: { value: '+12%', label: 'vs last month', positive: true }
    },
    {
      title: 'Pending Documents',
      value: '7',
      icon: FaFileContract,
      color: 'bg-yellow-500',
      trend: { value: '-3', label: 'since yesterday', positive: false }
    },
    {
      title: 'Monthly Spend',
      value: '$45,678',
      icon: FaMoneyBillWave,
      color: 'bg-green-500',
      trend: { value: '+5%', label: 'vs last month', positive: true }
    },
    {
      title: 'Time to Hire',
      value: '18 days',
      icon: FaUserClock,
      color: 'bg-purple-500',
      trend: { value: '-2 days', label: 'vs average', positive: true }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Charts and Activity */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <HiringMetrics />
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardOverview;