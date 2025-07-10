import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  return (
    <div className="flex justify-between bg-white dark:bg-gray-800 rounded-2xl shadow p-6 mb-6">
      <div className="flex-1 pr-4 border-r border-gray-200 dark:border-gray-700">
        <div className="flex items-center mb-2 text-green-500">
          <FaArrowCircleDown className="mr-2" />
          <h4 className="uppercase text-sm tracking-wide">Income</h4>
        </div>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          ${numberWithCommas(income)}
        </p>
      </div>
      <div className="flex-1 pl-4">
        <div className="flex items-center mb-2 text-red-500">
          <FaArrowCircleUp className="mr-2" />
          <h4 className="uppercase text-sm tracking-wide">Expense</h4>
        </div>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          ${numberWithCommas(expense)}
        </p>
      </div>
    </div>
  );
};

