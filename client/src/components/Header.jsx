import React from 'react';
import { FaWallet } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 py-6 shadow-md rounded-b-2xl">
      <div className="flex justify-center items-center space-x-3">
        <FaWallet className="text-white w-8 h-8" />
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          Expense Tracker 💸
        </h1>
      </div>
    </header>
  );
};
