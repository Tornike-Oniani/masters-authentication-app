import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import GoogleIcon from '../../assets/google.svg';

/*
<div className="flex items-stretch border border-gray-400 rounded mb-3 cursor-pointer">
  <div className="py-3 px-4 border-r border-gray-400 bg-cst-gray-800 flex items-center">
    <GoogleIcon />
  </div>
  <div className="py-3 pl-4">
    <span>
      Continue as <span className="font-semibold uppercase">super</span>{' '}
      admin
    </span>
  </div>
</div>
*/

const Homepage = () => {
  const navigate = useNavigate();

  const handleGoogleAuth = async (response) => {
    await axios.post('/api/auth', {
      response,
    });
    navigate('/login-redirect');
  };

  return (
    <div className="w-screen h-screen bg-cst-gray-800 relative shadow-2xl">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-24 rounded flex flex-col text-center">
        <h1 className="text-2xl font-bold text-cst-text-gray-800 mb-5">
          User Management Application
        </h1>
        <h2 className="text-cst-text-gray-800 font-semibold text-lg">
          Welcome
        </h2>
        <h3 className="text-cst-text-gray-800 text-base mb-14">
          Sign in to continue
        </h3>

        <GoogleLogin onSuccess={handleGoogleAuth} />
      </div>
    </div>
  );
};

export default Homepage;
