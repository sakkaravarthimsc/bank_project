import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import backgroundImage from '../asset/withdraw.jpg';

function WithdrawPage  ()  {
  const location = useLocation();
  const emailFromLocation = location.state ? location.state.email : '';
  const [formData, setFormData] = useState({
    email: emailFromLocation,
    amount: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount) {
      setErrorMessage('Please enter the amount to withdraw.');
      return;
    }
    console.log(typeof(formData.amount))
    if(Number(formData.amount)<0){
      alert("no negative amount accepted");
      return;
    }
    const storedUserData = localStorage.getItem(formData.email);
    if (!storedUserData) {
      setErrorMessage('User data not found.');
      return;
    }

    const userData = JSON.parse(storedUserData);
    if (userData.balance < parseInt(formData.amount)) {
      setErrorMessage('Insufficient balance.');
      return;
    }

    userData.balance -= parseInt(formData.amount);
    localStorage.setItem(formData.email, JSON.stringify(userData));
    setErrorMessage('');
    setFormData({
      email: formData.email,
      amount: ''
    });

    // Pass current balance and email ID to UserDataPage
    navigate('/user-data', { state: { email: formData.email, balance: userData.balance } });
  };

  return (
    <div style={{ 
      textAlign: 'center',
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#f9f9f9', 
      minHeight: '100vh' 
    }}>
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

      {/* Withdraw form */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '20px', fontSize: '24px' }}>Withdraw Page</h2>
        {errorMessage && <p style={{ color: 'red', marginBottom: '20px', fontSize: '16px' }}>{errorMessage}</p>}
        <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
          <label style={{ display: 'block', marginBottom: '10px',color: 'white' }}>
            Email:
            <input type="email" name="email" value={formData.email} readOnly style={{ marginLeft: '5px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px',color: 'white' }}>
            Amount:
            <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} style={{ marginLeft: '5px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
          </label>
          <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', width: '50%', fontSize: '18px', margin: '0 auto', display: 'block' }}>Withdraw</button>
        </form>
      </div>
    </div>
  );
};

export default WithdrawPage;
