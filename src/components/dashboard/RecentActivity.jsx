import React from 'react';
import { motion } from 'framer-motion';

const activities = [
  {
    id: 1,
    type: 'candidate',
    title: 'New candidate application',
    description: 'Sarah Chen applied for Senior Frontend Developer position',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'interview',
    title: 'Interview scheduled',
    description: 'Technical interview with Michael Wang',
    time: '3 hours ago',
  },
  {
    id: 3,
    type: 'document',
    title: 'Document uploaded',
    description: 'New employment contract uploaded for review',
    time: '5 hours ago',
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        <div className="mt-6 flow-root">
          <ul className="-mb-8">
            {activities.map((activity, index) => (
              <motion.li
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative pb-8">
                  {index !== activities.length - 1 && (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center ring-8 ring-white">
                        <span className="text-white text-sm">{activity.type[0].toUpperCase()}</span>
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">{activity.title}</span>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">{activity.description}</p>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        <p>{activity.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;