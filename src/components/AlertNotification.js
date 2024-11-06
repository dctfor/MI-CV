import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AlertNotification.css';

const AlertNotification = ({ message, onClose }) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show slide-in" role="alert" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
      {message}
      <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
    </div>
  );
};

export default AlertNotification;
