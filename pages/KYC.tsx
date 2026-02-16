
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const KYC: React.FC = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const [isCapturingSelfie, setIsCapturingSelfie] = useState(false);
  const [selfieCaptured, setSelfieCaptured] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('KYC Documents submitted for verification!');
    navigate('/profile');
  };

  return (
    <div className="bg-slate-50 min-h-screen p-6">
      <header className="flex items-center gap-4 mb-8 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-xl shadow-sm text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-slate-900">KYC Verification</h1>
      </header>

      <div className="bg-white p-6 rounded-[2.5rem] shadow-sm mb-6">
        <div className="mb-8 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold">Identity Details</h2>
            <p className="text-xs text-slate-400 font-medium">Verify your citizenship documents</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Aadhaar Number</label>
              <input 
                type="text" 
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value)}
                placeholder="0000 0000 0000"
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">PAN Card Number</label>
              <input 
                type="text" 
                value={pan}
                onChange={(e) => setPan(e.target.value)}
                placeholder="ABCDE1234F"
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest">Document Uploads</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                <div className="h-28 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-2 bg-slate-50 group-hover:bg-slate-100 transition-colors">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Aadhaar Photo</span>
                </div>
              </div>

              <div className="relative group">
                {!selfieCaptured ? (
                   <button 
                    type="button" 
                    onClick={() => {
                      setIsCapturingSelfie(true);
                      setTimeout(() => {
                        setIsCapturingSelfie(false);
                        setSelfieCaptured(true);
                      }, 2000);
                    }}
                    className="w-full h-28 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-2 bg-slate-50 group-hover:bg-slate-100 transition-colors"
                   >
                     {isCapturingSelfie ? (
                       <div className="animate-spin h-6 w-6 border-2 border-blue-500 border-t-transparent rounded-full" />
                     ) : (
                       <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                       </svg>
                     )}
                     <span className="text-[10px] font-bold text-slate-500 uppercase">Live Selfie</span>
                   </button>
                ) : (
                  <div className="h-28 border-2 border-green-200 rounded-3xl flex flex-col items-center justify-center gap-2 bg-green-50 overflow-hidden relative">
                    <img src="https://picsum.photos/seed/selfie/200" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                    <svg className="w-8 h-8 text-green-500 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] font-bold text-green-600 uppercase relative z-10">Captured</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 mt-8"
          >
            Submit for Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default KYC;
