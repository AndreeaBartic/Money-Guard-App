// RegistrationPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../RegistrationPage/RegistrationForm';
import './RegistrationPage.scss';

const RegistrationPage = () => {
  const handleRegistration = (values, { setSubmitting }) => {
    // Adaugă logica pentru trimiterea datelor la backend
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <h2 className="registration-title">Register</h2>
        <RegistrationForm onSubmit={handleRegistration} />
        <div className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
