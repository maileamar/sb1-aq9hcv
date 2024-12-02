import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCalendarAlt, FaFileDownload, FaPhone } from 'react-icons/fa';

const CandidateModal = ({ candidate, onClose }) => {
  if (!candidate) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4"
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xl font-medium text-gray-900">{candidate.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{candidate.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{candidate.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Expected Salary</p>
            <p className="font-medium">{candidate.salary}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Country</p>
            <p className="font-medium">{candidate.country}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-lg font-medium mb-4">Documents</h4>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              <FaFileDownload className="mr-2" />
              Download CV
            </button>
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            <FaEnvelope className="mr-2" />
            Send Email
          </button>
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <FaCalendarAlt className="mr-2" />
            Schedule Interview
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <FaPhone className="mr-2" />
            Call
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CandidateModal;