import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

const Toast = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      <FaCheckCircle />
      <span id="toast-message">{message}</span>
      <span className="toast-close" onClick={onClose}>
        <FaTimes />
      </span>
    </div>
  );
};

export default Toast;