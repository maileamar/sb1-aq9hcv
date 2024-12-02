import React from 'react';
import { motion } from 'framer-motion';
import { FaRegLightbulb, FaUserPlus, FaChartLine } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaRegLightbulb className="text-4xl text-red-600" />,
      number: "1",
      title: "Identify goals",
      description: "Book a call with our team to craft a targeted hiring strategy focused on your business goals, in terms of role requirements, compliance, and payment methods."
    },
    {
      icon: <FaUserPlus className="text-4xl text-red-600" />,
      number: "2",
      title: "Find & hire",
      description: "Leamar builds vetted talent pipeline, guides you through the hiring process with country specific insights and tailored compensation packages. You decide which candidates to hire."
    },
    {
      icon: <FaChartLine className="text-4xl text-red-600" />,
      number: "3",
      title: "Beyond hires",
      description: "Leamar takes care of offer generation, personalized onboarding mentorship (if needed), and manage all facets of your Vietnam team (compliance, payroll, taxes, benefits, HR support) to ensure you focus on performance only."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How it works</h2>
          <p className="text-xl text-gray-600">Your journey to building a successful team in Vietnam</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>

              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-200" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
            Start Your Journey →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;