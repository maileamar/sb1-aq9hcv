import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFirestore } from '../hooks/useFirestore';
import { InlineWidget } from 'react-calendly';
import toast from 'react-hot-toast';

const questions = [
  {
    id: 'role',
    question: 'What kind of talents are you hiring?',
    options: [
      { value: 'developers', label: 'Developers' },
      { value: 'designers', label: 'Designers' },
      { value: 'product_managers', label: 'Product Managers' },
      { value: 'other', label: 'Other Roles' }
    ]
  },
  {
    id: 'duration',
    question: 'How long do you need this?',
    options: [
      { value: '6_months', label: '6 months' },
      { value: '12_months', label: '12 months' },
      { value: 'permanent', label: 'Permanent' }
    ]
  }
];

const HiringQuestionnaire = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showCalendly, setShowCalendly] = useState(false);
  const { submitContact } = useFirestore();

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    if (currentStep < questions.length + 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContact(answers);
      setShowCalendly(true);
      toast.success('Thank you! Let\'s schedule a call.');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl p-8 max-w-lg w-full mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
        >
          ×
        </button>

        {!showCalendly ? (
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              {currentStep < questions.length ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {questions[currentStep].question}
                  </h3>
                  <div className="space-y-3">
                    {questions[currentStep].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                        className="w-full p-4 text-left border rounded-lg hover:bg-red-50 hover:border-red-500 transition-colors"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : currentStep === questions.length ? (
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    Please provide your contact information
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      required
                      onChange={(e) => handleAnswer('email', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      required
                      onChange={(e) => handleAnswer('phone', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Schedule a Call
                  </button>
                </motion.form>
              ) : null}
            </AnimatePresence>
          </div>
        ) : (
          <div className="h-[600px]">
            <InlineWidget
              url="https://calendly.com/your-calendly-url"
              styles={{ height: '100%', width: '100%' }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default HiringQuestionnaire;