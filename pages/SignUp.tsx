
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Persist the user data to localStorage for the mock login
    localStorage.setItem('registeredUser', JSON.stringify(formData));
    alert('Account created successfully! You can now log in.');
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white p-8">
      <div className="mt-12 mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>
        <p className="text-slate-400 mt-2 font-medium">Start your financial journey with us.</p>
      </div>

      <form onSubmit={handleSignUp} className="space-y-4 flex-1">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
          <input 
            type="text" 
            name="name"
            required 
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold" 
            placeholder="Sumit Mondal" 
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
          <input 
            type="email" 
            name="email"
            required 
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold" 
            placeholder="sumit@example.com" 
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Mobile Number</label>
          <input 
            type="tel" 
            name="phone"
            required 
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold" 
            placeholder="+91 98765 43210" 
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
          <input 
            type="password" 
            name="password"
            required 
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold" 
            placeholder="••••••••" 
          />
        </div>

        <div className="pt-4">
          <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100">
            Create Account
          </button>
        </div>
      </form>

      <div className="mt-8 text-center pb-8">
        <p className="text-slate-500 text-sm">
          Already have an account? {' '}
          <Link to="/login" className="text-blue-600 font-bold">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
