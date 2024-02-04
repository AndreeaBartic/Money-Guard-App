// LoginForm.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './LoginForm.scss';

const LoginForm = ({ onSubmit }) => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const handleSuccessfulAuth = () => {
    navigate('/DashboardPage');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values, actions);
        handleSuccessfulAuth();
      }}
    >
      <Form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Field
            type="email"
            id="email"
            name="email"
            className="input-field"
            autoComplete="email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            id="password"
            name="password"
            className="input-field"
            autoComplete="current-password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </div>

        <button type="submit" className="submit-button">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
