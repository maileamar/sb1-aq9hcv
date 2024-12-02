import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', applications: 45, hires: 5 },
  { month: 'Feb', applications: 52, hires: 7 },
  { month: 'Mar', applications: 61, hires: 8 },
  { month: 'Apr', applications: 48, hires: 6 },
  { month: 'May', applications: 55, hires: 9 },
  { month: 'Jun', applications: 67, hires: 11 },
];

const HiringMetrics = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Hiring Metrics</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="applications" fill="#ef4444" name="Applications" />
            <Bar dataKey="hires" fill="#22c55e" name="Hires" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HiringMetrics;