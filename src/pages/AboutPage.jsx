import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-red-800 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-8">About Leamar Hiring</h1>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              We are your trusted partner in connecting global businesses with top tech talent from Southeast Asia. Our mission is to simplify international hiring while ensuring compliance and efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-red-800 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To bridge the gap between global opportunities and Southeast Asian talent, creating a seamless hiring experience that benefits both employers and employees.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-red-800 mb-4">Our Values</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Excellence in service delivery</li>
                <li>• Transparency in operations</li>
                <li>• Commitment to compliance</li>
                <li>• Cultural understanding</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;