import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import Logo from '../../components/Logo';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-red-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        <div className="flex justify-center">
          <Logo />
        </div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        <AuthForm mode="signup" />
        
        <p className="mt-6 text-center text-sm text-white">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-white hover:text-gray-200">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;