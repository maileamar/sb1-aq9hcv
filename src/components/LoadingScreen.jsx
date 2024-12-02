import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-red-800 flex items-center justify-center z-50">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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

      {/* Loading Animation */}
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white mb-8">
            <path d="M16 2L2 16L16 30L30 16L16 2Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 16H24M16 8V24" stroke="currentColor" strokeWidth="2"/>
            <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
          </svg>

          {/* Loading Dots */}
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-4 h-4 bg-white rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Circuit Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '100px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transform: `rotate(${i * 60}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;