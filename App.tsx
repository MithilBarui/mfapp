
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import PinSetup from './pages/PinSetup';
import Dashboard from './pages/Dashboard';
import KYC from './pages/KYC';
import Profile from './pages/Profile';
import BankLinking from './pages/BankLinking';
import LoanTypes from './pages/LoanTypes';
import InvestmentDetails from './pages/InvestmentDetails';
import TransactionHistory from './pages/TransactionHistory';
import BottomNav from './components/BottomNav';

const AppContent: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [hasPin, setHasPin] = useState<boolean>(() => {
    return !!localStorage.getItem('userPin');
  });

  const location = useLocation();
  const showNav = ['/dashboard', '/profile', '/loans', '/investments'].some(path => location.pathname.startsWith(path));

  // Update auth state if local storage changes
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem('isLoggedIn') === 'true');
      setHasPin(!!localStorage.getItem('userPin'));
    };
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return (
    <div className="mobile-frame shadow-2xl flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto pb-20">
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={isAuthenticated ? <Navigate to={hasPin ? "/dashboard" : "/pin-setup"} /> : <Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Protected Routes */}
          <Route path="/pin-setup" element={isAuthenticated ? <PinSetup /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/kyc" element={isAuthenticated ? <KYC /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/bank-linking" element={isAuthenticated ? <BankLinking /> : <Navigate to="/login" />} />
          <Route path="/loan-types" element={isAuthenticated ? <LoanTypes /> : <Navigate to="/login" />} />
          <Route path="/investments" element={isAuthenticated ? <InvestmentDetails /> : <Navigate to="/login" />} />
          <Route path="/transactions" element={isAuthenticated ? <TransactionHistory /> : <Navigate to="/login" />} />

          {/* Fallback */}
          <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
      {showNav && <BottomNav />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
