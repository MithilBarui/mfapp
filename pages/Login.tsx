
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [pin, setPin] = useState('');
  const [usePin, setUsePin] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (usePin) {
      const savedPin = localStorage.getItem('userPin');
      if (pin === savedPin || (pin === '123456' && !savedPin)) {
        localStorage.setItem('isLoggedIn', 'true');
        // Trigger a custom event to notify App.tsx if needed, 
        // but App.tsx usually reacts to the navigate and state if we lift it.
        // For simple HashRouter apps, navigate is often enough if auth check happens on route.
        window.dispatchEvent(new Event('storage'));
        navigate('/dashboard');
      } else {
        setError('Invalid PIN. Please try again.');
      }
    } else {
      // Retrieve the user we saved during Sign Up
      const storedUserString = localStorage.getItem('registeredUser');
      
      if (!storedUserString) {
        // Fallback for first-time use or testing
        if (emailInput && passwordInput) {
          localStorage.setItem('isLoggedIn', 'true');
          window.dispatchEvent(new Event('storage'));
          navigate('/pin-setup');
        } else {
          setError('Please enter your credentials');
        }
        return;
      }

      const storedUser = JSON.parse(storedUserString);

      if (emailInput === storedUser.email && passwordInput === storedUser.password) {
        localStorage.setItem('isLoggedIn', 'true');
        // Notify the app that storage has changed
        window.dispatchEvent(new Event('storage'));
        
        // Check if PIN is already set
        const savedPin = localStorage.getItem('userPin');
        if (savedPin) {
          navigate('/dashboard');
        } else {
          navigate('/pin-setup');
        }
      } else {
        setError('Invalid Email or Password. Please try again.');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white p-8">
      <div className="mt-12 mb-10 flex flex-col items-center">
        <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-200 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Mondal Finance</h1>
        <p className="text-slate-400 mt-2 font-medium">Safe • Secure • Reliable</p>
      </div>

      <div className="flex-1">
        <div className="flex mb-8 bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => {setUsePin(false); setError('');}}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${!usePin ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
          >
            Password
          </button>
          <button 
            onClick={() => {setUsePin(true); setError('');}}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${usePin ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
          >
            MPIN
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {!usePin ? (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-black font-bold"
                  placeholder="Enter registered email"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
                <input 
                  type="password" 
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-black font-bold"
                  placeholder="••••••••"
                  required
                />
              </div>
            </>
          ) : (
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">6-Digit MPIN</label>
              <input 
                type="password" 
                maxLength={6}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-center text-2xl tracking-[1em] text-black font-bold"
                placeholder="••••••"
                required
              />
            </div>
          )}

          {error && <p className="text-red-500 text-sm font-medium mt-2">{error}</p>}

          <div className="flex justify-end">
            <Link to="/forgot-password" title="Forgot Password" className="text-blue-600 text-sm font-semibold hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 active:scale-[0.98] transition-all"
          >
            Sign In
          </button>
        </form>
      </div>

      <div className="mt-8 text-center pb-8">
        <p className="text-slate-500 text-sm">
          Don't have an account? {' '}
          <Link to="/signup" className="text-blue-600 font-bold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
