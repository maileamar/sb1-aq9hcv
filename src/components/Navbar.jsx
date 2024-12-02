import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { useAuth } from '../contexts/AuthContext';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="fixed w-full z-50 px-4 py-4">
      <div className={`max-w-7xl mx-auto transition-all duration-300 border-2 border-white/20 rounded-full backdrop-blur-md ${
        isScrolled ? 'bg-red-800/95' : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-lg text-white hover:text-white/90 transition-colors">About Us</Link>
            <Link to="/services" className="text-lg text-white hover:text-white/90 transition-colors">Service</Link>
            <Link to="/blog" className="text-lg text-white hover:text-white/90 transition-colors">Blog</Link>
            <Link to="/guidelines" className="text-lg text-white hover:text-white/90 transition-colors">Guidelines</Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/client/dashboard" 
                  className="px-4 py-2 bg-white text-red-800 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="px-4 py-2 text-white hover:text-white/90 transition-colors"
                >
                  Log In
                </Link>
                <Link 
                  to="/signup" 
                  className="px-4 py-2 bg-white text-red-800 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/90 transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-red-800/95 backdrop-blur-sm rounded-2xl mt-2 border-2 border-white/20">
            <div className="px-4 py-4 space-y-2">
              <Link to="/about" className="block px-3 py-2 text-white hover:text-white/90 transition-colors">About Us</Link>
              <Link to="/services" className="block px-3 py-2 text-white hover:text-white/90 transition-colors">Service</Link>
              <Link to="/blog" className="block px-3 py-2 text-white hover:text-white/90 transition-colors">Blog</Link>
              <Link to="/guidelines" className="block px-3 py-2 text-white hover:text-white/90 transition-colors">Guidelines</Link>
              
              {user ? (
                <>
                  <Link 
                    to="/client/dashboard" 
                    className="block px-3 py-2 bg-white text-red-800 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="block px-3 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Log In
                  </Link>
                  <Link 
                    to="/signup" 
                    className="block px-3 py-2 bg-white text-red-800 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;