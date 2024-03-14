// AppNavigator.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from '../registration/register';
import HomePage from '../components/home';
import DepositPage from '../components/deposite';
import WithdrawPage from '../components/withdraw';
import UserDataPage from '../components/profile'; 
import HomePage1 from '../components/bankhome';

const AppNavigator = () => { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/home" element={<HomePage />} />  
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/user-data" element={<UserDataPage userEmail="pass the user email here" />} />
        <Route path="/bankhome" element={<HomePage1 />} />
       </Routes>
    </Router>
  );
};

export default AppNavigator;
