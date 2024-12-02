import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M16 4L4 12L16 20L28 12L16 4Z" fill="currentColor"/>
                <path d="M4 20L16 28L28 20" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 16L16 24L28 16" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-2xl font-bold">Leamar Hiring</span>
            </Link>
            <p className="text-white/80">
              Your trusted partner for recruitment and employment solutions in Southeast Asia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-white/80"><FaLinkedin size={24} /></a>
              <a href="#" className="text-white hover:text-white/80"><FaFacebook size={24} /></a>
              <a href="#" className="text-white hover:text-white/80"><FaInstagram size={24} /></a>
              <a href="#" className="text-white hover:text-white/80"><FaTwitter size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white">Service</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-white">Blog</Link></li>
              <li><Link to="/guidelines" className="text-white/80 hover:text-white">Guidelines</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-white/80">+84 985438486</li>
              <li className="text-white/80">contact@leamarhiring.com</li>
              <li className="text-white/80">Hanoi, Vietnam</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;