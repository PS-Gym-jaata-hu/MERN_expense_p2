import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';
import { FaWallet } from 'react-icons/fa';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 mb-6 flex flex-col items-center">
      <FaWallet className="w-8 h-8 text-purple-600 mb-2" />
      <h4 className="uppercase text-gray-500 tracking-widest mb-1">Your Balance</h4>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        ${numberWithCommas(total)}
      </h1>
    </div>
  );
};