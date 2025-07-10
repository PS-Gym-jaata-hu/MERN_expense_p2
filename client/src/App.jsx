import React from 'react';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { ExpenseChart } from './components/ExpenseChart';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="min-h-screen w-full bg-gradient-to-br from-[#f8fafc] via-[#f1e6ff] to-[#e0e7ff] flex items-center justify-center px-2 md:px-0">
        <div className="max-w-7xl w-full py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
            {/* Left Column: Summary Cards */}
            <div className="col-span-1 flex flex-col space-y-6 h-full bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 backdrop-blur-md border border-gray-200 dark:border-gray-800 min-h-[700px]">
              <Balance />
              <IncomeExpenses />
              <AddTransaction />
            </div>

            {/* Right Column: Chart + Transaction List */}
            <div className="col-span-1 md:col-span-2 flex flex-col space-y-6 h-full bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 backdrop-blur-md border border-gray-200 dark:border-gray-800 min-h-[700px]">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
        {/* Aesthetic background shapes */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-200 opacity-30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-[30%] left-[50%] w-[300px] h-[300px] bg-blue-200 opacity-20 rounded-full blur-2xl animate-pulse-slow" />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
