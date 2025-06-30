import React from 'react';
import { useNavigate } from 'react-router';

function ErrorPages() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0D1128] px-4">
      {/* Glowing blurred circles */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-10 blur-2xl"></div>

      <div className="bg-[#1c1f3b] border border-teal-500/20 shadow-2xl backdrop-blur-xl rounded-2xl p-10 max-w-2xl text-center relative z-10 animate-fade-in">
        <img
          src="https://i.ibb.co/bMjcxJJr/1-YWUpn-Y-z-Nb-Sf-K62-GSJIBbw.png"
          alt="404 Not Found"
          className="w-60 mx-auto mb-6 animate-float"
        />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-green-400 to-teal-500 hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold text-lg transition transform hover:scale-105"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPages;
