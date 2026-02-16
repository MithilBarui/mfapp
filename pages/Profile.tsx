
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white pt-16 pb-8 px-6 rounded-b-[3rem] shadow-sm mb-6">
        <div className="flex flex-col items-center">
          <div className="relative group">
            <img src="https://picsum.photos/seed/sumit/200" className="w-24 h-24 rounded-[2rem] shadow-xl border-4 border-white" alt="profile" />
            <button className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-2 rounded-xl shadow-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              </svg>
            </button>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Sumit Mondal</h2>
          <p className="text-slate-400 font-medium">sumit@mondalfinance.com</p>
          
          <div className="flex gap-2 mt-4">
             <span className="px-3 py-1 bg-green-100 text-green-600 text-[10px] font-bold rounded-full uppercase">KYC Completed</span>
             <span className="px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-bold rounded-full uppercase">Premium User</span>
          </div>
        </div>
      </div>

      <div className="px-6 space-y-6">
        <section className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="text-slate-900 font-bold mb-6 flex items-center justify-between">
            Personal Details
            <button className="text-blue-600 text-xs font-bold uppercase tracking-wider">Edit</button>
          </h3>
          <div className="space-y-4">
            {[
              { label: 'Father Name', value: 'Ashok Mondal' },
              { label: 'Date of Birth', value: '12-05-1995' },
              { label: 'Phone Number', value: '+91 9876543210' },
              { label: 'Aadhaar Number', value: 'XXXX-XXXX-1234' },
              { label: 'Residential Address', value: '123, Salt Lake Sector V, Kolkata, India' },
            ].map((detail, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{detail.label}</span>
                <span className="text-sm font-semibold text-slate-700">{detail.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-2 shadow-sm">
          {[
            { label: 'Security & PIN', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', path: '/pin-setup' },
            { label: 'KYC Documents', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', path: '/kyc' },
            { label: 'Linked Bank Accounts', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', path: '/bank-linking' },
          ].map((item, i) => (
            <button 
              key={i} 
              onClick={() => navigate(item.path)}
              className="w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors first:rounded-t-3xl last:rounded-b-3xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <span className="font-bold text-slate-700 text-sm">{item.label}</span>
              </div>
              <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </section>

        <button 
          onClick={handleLogout}
          className="w-full py-4 text-red-500 font-bold text-sm bg-red-50 rounded-2xl mb-8"
        >
          Logout Session
        </button>
      </div>
    </div>
  );
};

export default Profile;
