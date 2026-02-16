
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PinSetup: React.FC = () => {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (pin.length !== 6) {
      setError('PIN must be 6 digits');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleFinish = () => {
    if (pin !== confirmPin) {
      setError('PINs do not match');
      return;
    }
    localStorage.setItem('userPin', pin);
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white p-8">
      <div className="mt-12 mb-8">
        <h1 className="text-2xl font-bold text-slate-900">{step === 1 ? 'Set Your MPIN' : 'Confirm MPIN'}</h1>
        <p className="text-slate-500 mt-2">Create a 6-digit PIN for faster and more secure logins.</p>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-[280px] space-y-8">
          <input
            type="password"
            maxLength={6}
            value={step === 1 ? pin : confirmPin}
            onChange={(e) => step === 1 ? setPin(e.target.value) : setConfirmPin(e.target.value)}
            className="w-full px-4 py-6 bg-slate-50 border border-slate-200 rounded-3xl text-center text-3xl font-bold tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            placeholder="••••••"
          />
          {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}
        </div>
      </div>

      <div className="pb-8">
        <button
          onClick={step === 1 ? handleNext : handleFinish}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100"
        >
          {step === 1 ? 'Continue' : 'Complete Setup'}
        </button>
      </div>
    </div>
  );
};

export default PinSetup;
