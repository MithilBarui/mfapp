
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleFinish = () => {
    alert('Password reset successfully!');
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white p-8">
      <header className="mb-10 pt-4">
        <button onClick={() => step > 1 ? setStep(step - 1) : navigate('/login')} className="p-2 bg-slate-50 rounded-xl text-slate-600">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </header>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
           {[1, 2, 3].map(s => (
             <div key={s} className={`h-1 flex-1 rounded-full ${s <= step ? 'bg-blue-600' : 'bg-slate-100'}`} />
           ))}
        </div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Step {step} of 3</p>

        {step === 1 && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">Verification</h1>
            <p className="text-slate-500">Enter your registered details to receive the verification codes.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Mobile Number</label>
                <input 
                  type="tel" 
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500"
                  placeholder="name@example.com"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">Enter OTP</h1>
            <p className="text-slate-500">We've sent a 6-digit code to both your email and mobile.</p>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Verification Code</label>
              <input 
                type="text" 
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 text-center text-3xl font-bold tracking-[0.5em]"
                placeholder="000000"
              />
              <button className="mt-4 text-blue-600 text-xs font-bold uppercase tracking-widest">Resend Codes</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">New Password</h1>
            <p className="text-slate-500">Create a strong password that you haven't used before.</p>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">New Password</label>
              <input 
                type="password" 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>
        )}
      </div>

      <div className="pb-8">
        <button 
          onClick={step < 3 ? handleNext : handleFinish}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100"
        >
          {step < 3 ? 'Continue' : 'Reset Password'}
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
