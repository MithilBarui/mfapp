
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TransactionHistory: React.FC = () => {
  const navigate = useNavigate();

  const txs = [
    { id: 1, title: 'Electricity Bill', amount: -2450.00, type: 'debit', date: '24 Oct 2024', category: 'Utilities' },
    { id: 2, title: 'Starbucks Coffee', amount: -350.00, type: 'debit', date: '22 Oct 2024', category: 'Food' },
    { id: 3, title: 'Salary Credit', amount: 85000.00, type: 'credit', date: '01 Oct 2024', category: 'Salary' },
    { id: 4, title: 'Phone Bill', amount: -799.00, type: 'debit', date: '28 Sep 2024', category: 'Mobile' },
    { id: 5, title: 'Amazon Shopping', amount: -1200.00, type: 'debit', date: '25 Sep 2024', category: 'Shopping' },
    { id: 6, title: 'Dividend Credit', amount: 450.00, type: 'credit', date: '20 Sep 2024', category: 'Investment' },
    { id: 7, title: 'House Rent', amount: -15000.00, type: 'debit', date: '05 Sep 2024', category: 'Housing' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen p-6">
      <header className="flex items-center gap-4 mb-8 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-xl shadow-sm text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-slate-900">Activity History</h1>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-6 -mx-6 px-6 no-scrollbar">
        {['All', 'Expenses', 'Income', 'Loans', 'Investments'].map((filter, i) => (
          <button 
            key={i}
            className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-500 shadow-sm'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          {txs.map((tx) => (
            <div key={tx.id} className="bg-white p-5 rounded-3xl shadow-sm flex items-center justify-between border border-slate-50 active:scale-[0.98] transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tx.type === 'debit' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {tx.type === 'debit' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                    )}
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{tx.title}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{tx.date}</span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full" />
                    <span className="text-[10px] font-bold text-blue-500 uppercase">{tx.category}</span>
                  </div>
                </div>
              </div>
              <p className={`text-sm font-bold ${tx.type === 'debit' ? 'text-slate-900' : 'text-green-600'}`}>
                {tx.type === 'debit' ? '-' : '+'} ₹ {Math.abs(tx.amount).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
