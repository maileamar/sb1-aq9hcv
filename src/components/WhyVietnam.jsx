import React from 'react';
import { motion } from 'framer-motion';

const WhyVietnam = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Vietnam engineers?</h2>
        </motion.div>

        {/* Salary Comparison Chart */}
        <div className="mb-16">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              {[
                { region: 'SEA', amount: 7500 },
                { region: 'United State', amount: 11000 },
                { region: 'Canada', amount: 10000 },
                { region: 'EMEA', amount: 9500 },
                { region: 'Australia', amount: 8000 },
                { region: 'APEC', amount: 4000 }
              ].map((item) => (
                <div key={item.region} className="relative">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{item.region}</span>
                    <span>${item.amount}</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.amount / 11000) * 100}%` }}
                      transition={{ duration: 1 }}
                      className={`h-full rounded-full ${item.region === 'APEC' ? 'bg-red-600' : 'bg-gray-400'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Comparison Box */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-lg mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">$9000$ is monthly average salary</h3>
            <div className="space-y-2">
              <p className="text-xl text-red-600">→ 4000$ in APAC</p>
              <p className="text-xl text-red-600">→ 3500-4500$ in Vietnam</p>
            </div>
            <p className="mt-4 text-gray-600">to hire a top-notch senior engineer</p>
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">BENEFITS OF HIRING ENGINEERS IN VIETNAM</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>High quality at a fraction of cost</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduced operational expenses for employers</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Vietnam team picks up tasks at the end of US/Europe workday to enable fast around</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Employees known for strong work ethics</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Thriving IT & startup scene</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Supportive government policies</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Flexible hiring options (contractors, fulltime)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyVietnam;