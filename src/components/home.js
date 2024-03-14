import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/bank.jpg'; 

const HomePage = () => {
  return (
    <div style={{ 
      textAlign: 'center',
      }}>
      <h1 style={{ color: '#333', fontSize: '32px', marginBottom: '20px' }}>Welcome to The Bank of Baruta</h1>
      <img src={logo} alt="Logo" style={{ width: '600px', height: '500px', margin: '4px auto' }} />
      <br />
      <Link to="/register">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Create Account</button>
      </Link>
    </div>
  );
};

export default HomePage;
