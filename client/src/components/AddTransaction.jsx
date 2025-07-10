import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FaCalendarPlus } from 'react-icons/fa';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text: text.trim(),
      amount: +amount,
    };

    if (!newTransaction.text || isNaN(newTransaction.amount)) return;

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <div className="flex items-center mb-4 space-x-2">
        <FaCalendarPlus className="text-purple-600 w-5 h-5" />
        <h3 className="text-xl font-semibold text-gray-900">
          Add New Transaction
        </h3>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="text" className="block text-gray-600 mb-1">
            Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-gray-600 mb-1">
            Amount <br />
            <span className="text-xs">(negative - expense, positive - income)</span>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};
