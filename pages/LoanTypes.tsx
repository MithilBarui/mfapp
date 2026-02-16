
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoanTypes: React.FC = () => {
  const navigate = useNavigate();
  
  const loans = [
    { 
      type: 'Personal Loan', 
      desc: 'Instant cash for your needs up to ₹ 10L', 
      rate: '10.5%', 
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      color: 'bg-indigo-50 text-indigo-600'
    },
    { 
      type: 'Home Loan', 
      desc: 'Build your dream house with ease', 
      rate: '8.2%', 
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      color: 'bg-emerald-50 text-emerald-600'
    },
    { 
      type: 'Car Loan', 
      desc: 'Get your favorite wheels today', 
      rate: '9.4%', 
      icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
      color: 'bg-amber-50 text-amber-600'
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen p-6">
      <header className="flex items-center gap-4 mb-8 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-xl shadow-sm text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-slate-900">Loan Products</h1>
      </header>

      <div className="space-y-4">
        {loans.map((loan, i) => (
          <div key={i} className="bg-white p-6 rounded-[2.5rem] shadow-sm flex flex-col gap-4 border border-slate-100">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 ${loan.color} rounded-2xl flex items-center justify-center`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={loan.icon} />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900">{loan.type}</h3>
                <p className="text-xs text-slate-400 font-medium">{loan.desc}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Interest Rate</p>
                <p className="text-sm font-bold text-slate-900">From {loan.rate} p.a.</p>
              </div>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-md shadow-blue-50 active:scale-95 transition-all">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">Need Help?</h3>
          <p className="text-blue-100 text-sm mb-6">Talk to our loan experts and get instant approval guidance.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-sm">Contact Support</button>
        </div>
        <svg className="absolute -right-10 -bottom-10 w-48 h-48 text-white/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
        </svg>
      </div>
    </div>
  );
};

export default LoanTypes;
