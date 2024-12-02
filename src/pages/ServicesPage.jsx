import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-red-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive solutions for your international hiring needs
            </p>
          </div>
        </div>
      </div>
      <Services />
      <HowItWorks />
    </>
  );
};

export default ServicesPage;