import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ApplyModal = ({ show, onClose, onSubmitSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitSuccess();
  };

  if (!show) return null;

  return (
    <div className={`modal ${show ? 'active' : ''}`}>
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>
          <FaTimes />
        </span>
        <h2 className="modal-title">Admission Inquiry</h2>
        <div className="modal-body">
          <form id="apply-form" onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: 'var(--dark)' }}>Full Name</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '100%', padding: '12px', border: '1px solid var(--medium-gray)', borderRadius: '5px', fontSize: '16px' }} 
                required 
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email-apply" style={{ display: 'block', marginBottom: '8px', color: 'var(--dark)' }}>Email Address</label>
              <input 
                type="email" 
                id="email-apply" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '12px', border: '1px solid var(--medium-gray)', borderRadius: '5px', fontSize: '16px' }} 
                required 
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', color: 'var(--dark)' }}>Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ width: '100%', padding: '12px', border: '1px solid var(--medium-gray)', borderRadius: '5px', fontSize: '16px' }} 
                required 
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="program" style={{ display: 'block', marginBottom: '8px', color: 'var(--dark)' }}>Program of Interest</label>
              <select 
                id="program" 
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                style={{ width: '100%', padding: '12px', border: '1px solid var(--medium-gray)', borderRadius: '5px', fontSize: '16px' }} 
                required
              >
                <option value="">Select Program</option>
                <option value="btech">B.Tech</option>
                <option value="mba">MBA</option>
                <option value="mca">MCA</option>
                <option value="phd">Ph.D</option>
              </select>
            </div>
            <button type="submit" style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', transition: 'background 0.3s', width: '100%' }}>
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;