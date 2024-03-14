import React from 'react';
import logo from '../asset/bank.jpg'; 
import { NavLink } from 'react-router-dom';

const HomePage1 = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <nav style={{ backgroundColor: '#333', padding: '10px 0', marginBottom: '20px' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
          <li style={{ margin: '0 10px', padding: '5px 10px', borderRadius: '5px' }}><NavLink to="/bankhome" style={{ textDecoration: 'none', color: '#fff', fontSize: '18px' }}>Home</NavLink></li>
          <li style={{ margin: '0 10px', padding: '5px 10px', borderRadius: '5px' }}><NavLink to="/deposit" style={{ textDecoration: 'none', color: '#fff', fontSize: '18px' }}>Deposit</NavLink></li>
          <li style={{ margin: '0 10px', padding: '5px 10px', borderRadius: '5px' }}><NavLink to="/withdraw" style={{ textDecoration: 'none', color: '#fff', fontSize: '18px' }}>Withdraw</NavLink></li>
          <li style={{ margin: '0 10px', padding: '5px 10px', borderRadius: '5px' }}><NavLink to="/user-data" style={{ textDecoration: 'none', color: '#fff', fontSize: '18px' }}>Profile</NavLink></li>
          <li style={{ margin: '0 10px', padding: '5px 10px', borderRadius: '5px' }}><NavLink to="/home" style={{ textDecoration: 'none', color: '#fff', fontSize: '18px' }}>Logout</NavLink></li>
        </ul>
      </nav>
      <h1 style={{ color: '#333', fontSize: '32px', marginBottom: '20px' }}>Welcome to The Bank of Baruta</h1>
      <img src={logo} alt="Logo" style={{ width: '600px', height: '500px', margin: '50px auto', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }} />
    </div>
  );
};

export default HomePage1;
