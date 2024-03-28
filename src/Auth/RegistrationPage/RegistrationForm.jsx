import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/authReducers/authOperations';
import * as Yup from 'yup';
// import {
//   Card,
//   InputWrapper,
//   InputRegister,
//   TitleRegisters,
//   LogoWrapper,
//   FormRegister,
//   ErrorRegister,
//   IconWrapper,
// } from '../../Auth/LoginPage/LoginForm.styled';
import { ReactComponent as UserIcon } from '../../images/svg/form-user.svg';
import { ReactComponent as EmailIcon } from '../../images/svg/form-email.svg';
import { ReactComponent as LockIcon } from '../../images/svg/form-password.svg';
import { ReactComponent as LogoIcon } from '../../images/svg/logo.svg';
import { ReactComponent as Shield } from '../../images/svg/shield.svg';
import { ReactComponent as CloseShield } from '../../images/svg/close.shield.svg';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CustomButton } from '../../components/common/CustomButton';
// import Logotip from '../../images/svg/logo.svg';
import {
  // EmailIcon,
  // ErrorContainer,
  // ErrorMessageStyled,
  // FormStyled,
  // IconContainer,
  // InputStyled,
  // LabelStyled,
  // PasswordIcon,
  Card,
  InputWrapper,
  InputRegister,
  TitleRegisters,
  LogoWrapper,
  FormRegister,
  ErrorRegister,
  IconWrapper,
} from '../../Auth/RegistrationPage/RegistrationForm.styled';
import PasswordStrengthBar from 'react-password-strength-bar';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Username is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(12, 'Must be 12 characters or less')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async values => {
      const userCredentials = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      try {
        const response = await dispatch(register(userCredentials));

        if (response.payload === 'Request failed with status code 409') {
          toast.error('Access Forbidden: User with such email already exists');
        } else {
          toast.success('Successfully logged in!');
          navigate('/home');
        }
      } catch (error) {
        toast.error('An error occurred: ' + error.message);
      }
    },
  });

  function togglePasswordVisibility() {
    setShowPassword(prev => !prev);
  }

  function toggleConfirmPasswordVisibility() {
    setShowConfirmPassword(prev => !prev);
  }
  return (
    <Card>
      <FormRegister onSubmit={formik.handleSubmit}>
        <LogoWrapper>
          <LogoIcon className="logo-register" />
          <TitleRegisters>Money Guard</TitleRegisters>
        </LogoWrapper>
        <InputWrapper>
          <label htmlFor="username"></label>
          <UserIcon className="icons-login" />
          <InputRegister
            placeholder="Name"
            type="text"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.username && formik.errors.username ? (
            <ErrorRegister className="error">
              {formik.errors.username}
            </ErrorRegister>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="email"></label>
          <EmailIcon className="icons-login" />
          <InputRegister
            placeholder="E-mail"
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorRegister className="error">
              {formik.errors.email}
            </ErrorRegister>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password"></label>
          <LockIcon className="icons-login" />
          <InputRegister
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          <IconWrapper className="btn" onClick={togglePasswordVisibility}>
            {showPassword ? <CloseShield /> : <Shield />}
          </IconWrapper>
          {formik.touched.password && formik.errors.password ? (
            <ErrorRegister className="error">
              {formik.errors.password}
            </ErrorRegister>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="confirmPassword"></label>
          <LockIcon className="icons-login" />
          <InputRegister
            placeholder="Confirm password"
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          <IconWrapper
            className="btn"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <CloseShield /> : <Shield />}
          </IconWrapper>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <ErrorRegister className="error">
              {formik.errors.confirmPassword}
            </ErrorRegister>
          ) : null}
          <PasswordStrengthBar
            scoreWords={[
              'too short',
              'weak',
              'insecure',
              'secure',
              'good password',
            ]}
            barColors={['#ff868d', '#ffc727', '#9e40ba', '#7000ff', 'green']}
            password={formik.values.password}
          />
        </InputWrapper>
        <div className="button-wrapper">
          <CustomButton type="submit">Register</CustomButton>
          <CustomButton isNavLink to="/login">
            Log In
          </CustomButton>
        </div>
      </FormRegister>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Card>
  );
};

export default RegisterForm;
