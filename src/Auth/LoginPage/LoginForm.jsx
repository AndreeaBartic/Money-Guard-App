import React from 'react';
import { CustomButton } from '../../components/common/CustomButton';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from '../../Redux/authReducers/authOperations';
import { Formik, ErrorMessage } from 'formik';
import Logotip from '../../images/svg/logo.svg';
import {
  EmailIcon,
  FormStyled,
  IconContainer,
  IconInInput,
  InputStyled,
  LabelStyled,
  PasswordIcon,
} from './LoginForm.styled';
import { toast } from 'react-toastify';
import { LogotipStyled } from '../RegistrationPage/RegistrationForm.styled';
import { Link, useNavigate } from 'react-router-dom';
const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await ValidationSchema.validate(values, { abortEarly: false });
      const name = values.email.split('@')[0];
      const formData = {
        email: values.email.trim(),
        password: values.password.trim(),
      };
      const result = await dispatch(logIn(formData));
      if (result.error) {
        toast.error('Login failed. Please check your credentials.', {
          autoClose: 1200,
        });
      } else {
        toast.success(`You have successfully logged in ${name}.`, {
          autoClose: 1200,
        });
        navigate('/home');
        resetForm();
      }
    } catch (error) {
      toast.error('Login failed. Please check your credentials.', {
        autoClose: 3000,
      });
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <FormStyled onSubmit={handleSubmit}>
          <LogotipStyled>
            <img
              src={Logotip}
              alt="Logo MoneyGuard"
              width="36px"
              height="36px"
              draggable="false"
            />
            <h3>MoneyGuard</h3>
          </LogotipStyled>

          <LabelStyled>
            <IconInInput>
              <IconContainer>
                <EmailIcon />
              </IconContainer>
              <InputStyled name="email" type="email" placeholder="E-mail" />
            </IconInInput>
            <ErrorMessage name="email" component="div" />
          </LabelStyled>

          <LabelStyled>
            <IconInInput>
              <IconContainer>
                <PasswordIcon />
              </IconContainer>
              <InputStyled
                name="password"
                type="password"
                placeholder="Password"
              />
            </IconInInput>
            <ErrorMessage name="password" component="div" />
          </LabelStyled>
          <p className="register">
            You don't have an acount?{' '}
            <Link className="register-link" to="/register">
              Register
            </Link>
          </p>
          <CustomButton type="submit">Log In</CustomButton>
          <CustomButton isNavLink to="/register">
            Register
          </CustomButton>
        </FormStyled>
      )}
    </Formik>
  );
};
export default LoginForm;
