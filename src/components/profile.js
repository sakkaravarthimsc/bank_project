import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import backgroundImage from '../asset/deposite.jpg';

const UserDataPage = () => {    
  const location = useLocation();
  const { email, balance } = location.state || {};

  return (
    <div style={{ 
      position: 'relative', 
      textAlign: 'center',
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      }}>
      <div style={{ 
        position: 'absolute', 
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}></div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#fff', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        {/* Navigation */}
        <nav style={{ backgroundColor: '#333', padding: '10px 0', marginBottom: '20px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
            <li style={{ margin: '0 10px', padding: '5px 10px', borderRadius: '5px' }}><NavLink to="/bankhome" style={{ textDecoration: 'none', color: '#fff', fontSize: '18px' }}>Home</NavLink></li>
            <li style={{ margin: '0 10px', padding: '5px 10px', borderRadius: '5px' }}><NavLink to="/deposit" style={{ textDecoration: 'none', color: '#fff', fontSize: '18px' }}>Deposit</NavLink></li>
            <li style={{ margin: '0 10px', padding: '5px 10px', borderRadius: '5px' }}><NavLink to="/withdraw" style={{ textDecoration: 'none', color: '#fff', fontSize: '18px' }}>Withdraw</NavLink></li>
            <li style={{ margin: '0 10px', padding: '5px 10px', borderRadius: '5px' }}><NavLink to="/user-data" style={{ textDecoration: 'none', color: '#fff', fontSize: '18px' }}>Profile</NavLink></li>
            <li style={{ margin: '0 10px', padding: '5px 10px', borderRadius: '5px' }}><NavLink to="/home" style={{ textDecoration: 'none', color: '#fff', fontSize: '18px' }}>Logout</NavLink></li>
          </ul>
        </nav>
        {/* User Data */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px', fontSize: '24px' }}>User Data</h2>
          {email && balance ? (
            <div>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Balance:</strong> {balance}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDataPage;
