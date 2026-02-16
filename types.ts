
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  pinSet: boolean;
  kycStatus: 'pending' | 'completed' | 'none';
}

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: 'debit' | 'credit';
  date: string;
  category: string;
}

export interface Investment {
  id: string;
  name: string;
  amount: number;
  returnRate: number;
}

export interface Loan {
  id: string;
  type: 'Personal' | 'Home' | 'Car';
  outstanding: number;
  nextDuo: string;
}

export interface Bank {
  id: string;
  name: string;
  logo: string;
}
