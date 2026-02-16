
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const navigate = useNavigate();

  const transactions = [
    { id: 1, title: 'Electricity Bill', amount: -2450.00, type: 'debit', date: 'Oct 24', category: 'Utilities' },
    { id: 2, title: 'Salary Credit', amount: 85000.00, type: 'credit', date: 'Oct 01', category: 'Salary' },
    { id: 3, title: 'Starbucks', amount: -350.00, type: 'debit', date: 'Oct 22', category: 'Food' },
  ];

  return (
    <div className="bg-slate-50 min-h-full pb-20">
      {/* Header */}
      <div className="bg-blue-600 pt-12 pb-24 px-6 rounded-b-[40px] relative">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-blue-100 text-sm">Welcome back,</p>
            <h2 className="text-white text-xl font-bold">Sumit Mondal</h2>
          </div>
          <button 
            onClick={() => navigate('/profile')}
            className="w-12 h-12 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center"
          >
            <img src="https://picsum.photos/seed/sumit/100" className="w-10 h-10 rounded-xl" alt="profile" />
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">Total Balance</p>
              <div className="flex items-center gap-2">
                <h1 className="text-white text-3xl font-bold">
                  {balanceVisible ? '₹ 1,24,500.80' : '••••••••'}
                </h1>
                <button onClick={() => setBalanceVisible(!balanceVisible)} className="text-blue-100">
                  {balanceVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => navigate('/bank-linking')} className="flex-1 py-3 bg-white text-blue-600 rounded-2xl text-sm font-bold shadow-md active:scale-95 transition-all">View Accounts</button>
            <button onClick={() => navigate('/transactions')} className="flex-1 py-3 bg-blue-500/50 text-white rounded-2xl text-sm font-bold active:scale-95 transition-all border border-white/20">Transactions</button>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-10 space-y-6">
        {/* Quick Actions / Payments */}
        <section className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="text-slate-900 font-bold mb-4">Payments & Transfers</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Transfer', color: 'bg-orange-50 text-orange-500', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
              { label: 'Electricity', color: 'bg-yellow-50 text-yellow-500', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { label: 'Credit Card', color: 'bg-blue-50 text-blue-500', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
              { label: 'Recharge', color: 'bg-purple-50 text-purple-500', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
            ].map((action, i) => (
              <button key={i} className="flex flex-col items-center gap-2 group">
                <div className={`${action.color} w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-active:scale-90`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase">{action.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Investment Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Invested</p>
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h4 className="text-lg font-bold text-slate-900">₹ 2,45,000</h4>
            <button onClick={() => navigate('/investments')} className="mt-4 text-blue-600 text-xs font-bold uppercase flex items-center gap-1 group">
              Explore More <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Loan</p>
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h4 className="text-lg font-bold text-slate-900 text-red-500">₹ 8,12,000</h4>
            <button onClick={() => navigate('/loan-types')} className="mt-4 text-blue-600 text-xs font-bold uppercase flex items-center gap-1 group">
              Manage Loan <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Recent Transactions */}
        <section className="bg-white rounded-3xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-slate-900 font-bold">Recent Activities</h3>
            <button onClick={() => navigate('/transactions')} className="text-blue-600 text-sm font-semibold">See All</button>
          </div>
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between group cursor-pointer active:scale-[0.98] transition-all">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tx.type === 'debit' ? 'bg-red-50' : 'bg-green-50'}`}>
                    <svg className={`w-6 h-6 ${tx.type === 'debit' ? 'text-red-500' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {tx.type === 'debit' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{tx.title}</p>
                    <p className="text-xs text-slate-400 font-medium">{tx.date} • {tx.category}</p>
                  </div>
                </div>
                <p className={`text-sm font-bold ${tx.type === 'debit' ? 'text-red-500' : 'text-green-500'}`}>
                  {tx.type === 'debit' ? '-' : '+'} ₹ {Math.abs(tx.amount).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
