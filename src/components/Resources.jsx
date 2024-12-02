import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalculator, FaGlobe, FaClipboardCheck } from 'react-icons/fa';

const Resources = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Browse our global HR library
          </motion.h2>
          <p className="text-xl text-gray-600">
            Browse our virtual shelves and expand your global HR knowledge. Run the numbers with global employment calculators, dive into new research, and read the latest on the Leamar blog.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Research Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-red-600 text-white p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Research</h3>
            <p className="mb-8">See the latest data on employment trends, jobseeker needs, and distributed work.</p>
            <button className="group flex items-center text-white">
              Learn more
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Employee Cost Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-indigo-600 text-white p-8 rounded-2xl"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">Employee Cost Calculator</h3>
              <FaCalculator className="text-2xl" />
            </div>
            <p className="mb-8">Salary is just the start. Get the real numbers on total employment costs around the world.</p>
            <button className="group flex items-center text-white">
              Calculate now
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Country Explorer Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-emerald-600 text-white p-8 rounded-2xl"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">Country Explorer</h3>
              <FaGlobe className="text-2xl" />
            </div>
            <p className="mb-8">Country-specific guides on everything you need to know to employ abroad.</p>
            <button className="group flex items-center text-white">
              Explore countries
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resources;