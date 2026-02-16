
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BankLinking: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [isLinking, setIsLinking] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const banks = [
    { id: '1', name: 'State Bank of India', color: 'bg-blue-500' },
    { id: '2', name: 'HDFC Bank', color: 'bg-red-700' },
    { id: '3', name: 'ICICI Bank', color: 'bg-orange-600' },
    { id: '4', name: 'Axis Bank', color: 'bg-purple-800' },
    { id: '5', name: 'Kotak Mahindra', color: 'bg-red-600' },
  ];

  const handleLink = () => {
    setIsLinking(true);
    setTimeout(() => {
      setIsLinking(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8 text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Success!</h2>
        <p className="text-slate-500 mb-8">Bank account linked successfully with Mondal Finance.</p>
        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen p-6">
      <header className="flex items-center gap-4 mb-8 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-xl shadow-sm text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-slate-900">Link Bank Account</h1>
      </header>

      {!selectedBank ? (
        <div className="space-y-4">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest px-2">Select Your Bank</p>
          {banks.map((bank) => (
            <button 
              key={bank.id}
              onClick={() => setSelectedBank(bank.name)}
              className="w-full p-5 bg-white rounded-[2rem] flex items-center justify-between group shadow-sm active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${bank.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl`}>
                  {bank.name.charAt(0)}
                </div>
                <span className="font-bold text-slate-700">{bank.name}</span>
              </div>
              <svg className="w-5 h-5 text-slate-300 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-[3rem] shadow-sm">
          <div className="mb-8 text-center">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl mx-auto flex items-center justify-center mb-4">
               <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900">{selectedBank}</h2>
            <p className="text-xs text-slate-400 font-medium uppercase mt-1">Net Banking Login</p>
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Login Password</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            <p className="text-[10px] text-slate-400 font-medium px-1 italic">
              * Mondal Finance never stores your bank passwords.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={handleLink}
              disabled={isLinking || !password}
              className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${isLinking || !password ? 'bg-slate-200 text-slate-400' : 'bg-blue-600 text-white shadow-blue-100'}`}
            >
              {isLinking ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                  Linking...
                </>
              ) : 'Authenticate & Link'}
            </button>
            <button onClick={() => setSelectedBank(null)} className="w-full py-4 text-slate-500 font-bold text-sm">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankLinking;
