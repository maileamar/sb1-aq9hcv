import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HiringQuestionnaire from './HiringQuestionnaire';

const Hero = () => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  return (
    <div className="bg-red-800 min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent" />
        <div className="grid grid-cols-6 gap-4 p-8">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="h-16 rounded-lg bg-white"
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Recruit and employ Vietnam tech talents
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8">
              VietHR helps global companies source, validate, hire, employ and pay Vietnam employees compliantly, easily without a need to set up legal entities.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-400" />
                <span>Easy self-onboarding</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-400" />
                <span>Full local compliance</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-400" />
                <span>Fixed payments</span>
              </div>
            </div>
            <div className="space-x-4">
              <button 
                onClick={() => setShowQuestionnaire(true)}
                className="bg-white text-red-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                I'm Hiring →
              </button>
              <Link 
                to="/client/dashboard" 
                className="bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
              >
                Client Dashboard →
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-gray-900">Michael Chen</h3>
                <p className="text-gray-600">CTO at TechGlobal</p>
              </div>
            </div>
            <blockquote className="text-gray-700 mb-6">
              "VietHR made it incredibly easy for us to build our engineering team in Vietnam. Their compliance and payroll management saved us countless hours and resources."
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500">Verified Client</span>
            </div>
          </motion.div>
        </div>
      </div>

      <HiringQuestionnaire 
        isOpen={showQuestionnaire} 
        onClose={() => setShowQuestionnaire(false)} 
      />
    </div>
  );
};

export default Hero;