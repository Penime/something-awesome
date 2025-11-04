"use client";

import React from 'react';

const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
