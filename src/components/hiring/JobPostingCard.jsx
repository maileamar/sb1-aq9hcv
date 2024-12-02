import React from 'react';
import { motion } from 'framer-motion';

const JobPostingCard = ({ job, isSelected, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow p-6 cursor-pointer
        ${isSelected ? 'ring-2 ring-red-500' : ''}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
          <p className="text-sm text-gray-500">
            {job.location} • {job.department}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
            {job.candidates.length} candidates
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default JobPostingCard;