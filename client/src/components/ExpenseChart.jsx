import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

export const ExpenseChart = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((t) => t.amount);
  const income = amounts.filter((a) => a > 0).reduce((acc, a) => acc + a, 0);
  const expense = amounts.filter((a) => a < 0).reduce((acc, a) => acc + a, 0) * -1;

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ['#22c55e', '#ef4444'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center h-64">
      <Doughnut data={data} />
    </div>
  );
};