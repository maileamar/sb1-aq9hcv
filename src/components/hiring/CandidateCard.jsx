import React from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

const CandidateCard = ({ candidate, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <FaUser className="text-red-600" />
          </div>
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{candidate.name}</h4>
          <p className="text-sm text-gray-500">{candidate.email}</p>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-sm text-gray-600">
          Expected: {candidate.salary}
        </span>
      </div>
    </motion.div>
  );
};

export default CandidateCard;