import React from 'react';
import { motion } from 'framer-motion';
import { Disclosure, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "How does your recruitment process work?",
    answer: "Our recruitment process involves understanding your requirements, sourcing candidates through our network, conducting initial screenings, and presenting you with a shortlist of qualified candidates. You'll have full control over the final selection while we handle all the administrative aspects."
  },
  {
    question: "What is an Employer of Record (EOR) service?",
    answer: "An EOR service allows you to hire employees in Vietnam without establishing a local entity. We act as the legal employer, handling payroll, benefits, and compliance, while you maintain day-to-day management of your team."
  },
  {
    question: "How long does it typically take to hire an engineer?",
    answer: "The typical hiring timeline is 4-6 weeks from requirement gathering to onboarding. This includes sourcing, screening, interviews, and offer acceptance. However, timelines can vary based on role complexity and specific requirements."
  },
  {
    question: "What are the cost advantages of hiring in Vietnam?",
    answer: "Companies can typically save 40-60% on employment costs compared to Western markets while maintaining high quality. A senior engineer in Vietnam costs $3,500-4,500 monthly, compared to $9,000+ in the US."
  },
  {
    question: "How do you ensure quality in recruitment?",
    answer: "We maintain strict quality standards through thorough technical assessments, language proficiency tests, and detailed reference checks. Our team has extensive experience in technical recruitment and understanding of both local and international markets."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about hiring in Vietnam
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Disclosure>
                  {({ open }) => (
                    <div className="bg-white rounded-lg shadow">
                      <Disclosure.Button className="w-full px-6 py-4 text-left flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <FaChevronDown
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-red-600 transition-transform duration-200`}
                        />
                      </Disclosure.Button>

                      <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-6 py-4 text-gray-600">
                          {faq.answer}
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;