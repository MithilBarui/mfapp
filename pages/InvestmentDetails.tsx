
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 200000 },
  { name: 'Feb', value: 210000 },
  { name: 'Mar', value: 205000 },
  { name: 'Apr', value: 225000 },
  { name: 'May', value: 240000 },
  { name: 'Jun', value: 245000 },
];

const InvestmentDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 min-h-screen p-6">
      <header className="flex items-center gap-4 mb-8 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-xl shadow-sm text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-slate-900">Investments</h1>
      </header>

      <div className="bg-white p-6 rounded-[2.5rem] shadow-sm mb-6">
        <div className="mb-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Portfolio Value</p>
          <h2 className="text-3xl font-bold text-slate-900">₹ 2,45,000.00</h2>
          <p className="text-green-500 text-xs font-bold flex items-center gap-1 mt-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            +12.5% this year
          </p>
        </div>

        <div className="h-48 w-full -mx-4">
          <ResponsiveContainer width="110%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { name: 'Fixed Deposit', amount: 120000, color: 'bg-blue-600', icon: '🏦' },
          { name: 'Mutual Funds', amount: 85000, color: 'bg-indigo-600', icon: '📈' },
          { name: 'Gold Savings', amount: 40000, color: 'bg-amber-500', icon: '✨' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{item.name}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Growth Plan</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">₹ {item.amount.toLocaleString()}</p>
              <button className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mt-1">Details</button>
            </div>
          </div>
        ))}

        <button className="w-full py-5 border-2 border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold text-sm hover:bg-white hover:border-blue-300 transition-colors flex items-center justify-center gap-2 mt-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add New Investment
        </button>
      </div>
    </div>
  );
};

export default InvestmentDetails;
