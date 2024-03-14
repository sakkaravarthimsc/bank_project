import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    age: '',
    gender: '',
    email: '',
    password: '',
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
    if (!formData.fullName || !formData.dob || !formData.age || !formData.gender || !formData.email || !formData.password) {
      setErrorMessage('Please fill out all fields.');
      return;
    }
    const accountNumber = parseInt(localStorage.getItem('accountNumber') || '10000') + 1;
    localStorage.setItem('accountNumber', accountNumber.toString());
    const userData = {
      ...formData,
      accountNumber: accountNumber.toString(),
      balance: 0
    };
    localStorage.setItem(formData.email, JSON.stringify(userData)); 
    console.log(localStorage);
    setErrorMessage('');
    window.alert('Registration successful!');
    navigate('/bankhome'); 
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ maxWidth: '400px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label style={{ marginBottom: '10px', display: 'block' }}>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>
          <label style={{ marginBottom: '10px', display: 'block' }}>
            Date of Birth:
            <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>
          <label style={{ marginBottom: '10px', display: 'block' }}>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>
          <label style={{ marginBottom: '10px', display: 'block' }}>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}>
              <option value="Select the Gender">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label style={{ marginBottom: '10px', display: 'block' }}>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>
          <label style={{ marginBottom: '10px', display: 'block' }}>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>
          <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', width: '100%', fontSize: '18px' }}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
