import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FaTrash } from 'react-icons/fa';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const itemBg = transaction.amount < 0 ? 'bg-red-50 dark:bg-red-500/10' : 'bg-green-50 dark:bg-green-500/10';
  const textColor = transaction.amount < 0 ? 'text-red-600' : 'text-green-600';

  return (
    <li
      className={`flex justify-between items-center ${itemBg} border-l-4 ${transaction.amount < 0 ? 'border-red-500' : 'border-green-500'} p-4 rounded-lg shadow transition hover:scale-[1.02]`}
    >
      <span className="text-gray-900 dark:text-white">{transaction.text}</span>
      <div className="flex items-center space-x-4">
        <span className={`font-bold ${textColor}`}>
          {sign}${Math.abs(transaction.amount).toFixed(2)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction._id)}
          className="bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-red-600 transition"
          aria-label="Delete transaction"
        >
          <FaTrash className="w-4 h-4" />
        </button>
      </div>
    </li>
  );
};
