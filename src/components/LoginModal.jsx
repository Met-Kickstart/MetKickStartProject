import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const LoginModal = ({ show, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Mock function to validate credentials and return role
  const authenticateUser = (email, password) => {
    // Example mock users
    const users = [
      { email: 'student@example.com', password: 'student123', role: 'student' },
      { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    ];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    return user ? user.role : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const role = authenticateUser(email, password);
    if (role) {
      setError('');
      onLoginSuccess(role); // Pass role info to parent
    } else {
      setError('Invalid email or password');
    }
  };

  if (!show) return null;

  return (
    <div className={`modal ${show ? 'active' : ''}`}>
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>
          <FaTimes />
        </span>
        <h2 className="modal-title">Login to Placement Portal</h2>
        <div className="modal-body">
          <form id="login-form" onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: 'var(--dark)' }}>Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '12px', border: '1px solid var(--medium-gray)', borderRadius: '5px', fontSize: '16px' }} 
                required 
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', color: 'var(--dark)' }}>Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '12px', border: '1px solid var(--medium-gray)', borderRadius: '5px', fontSize: '16px' }} 
                required 
              />
            </div>
            {error && (
              <p style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</p>
            )}
            <button type="submit" style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', transition: 'background 0.3s', width: '100%' }}>
              Login
            </button>
          </form>
          <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--gray)' }}>
            Don't have an account? <a href="#" style={{ color: 'var(--primary)' }}>Contact Placement Cell</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
