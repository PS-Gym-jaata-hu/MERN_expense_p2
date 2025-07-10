import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow mb-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        History
      </h3>
      <ul className="space-y-3">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
