import { CustomButton } from '../../components/common/CustomButton';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from '../../Redux/authReducers/authOperations';
import { Formik } from 'formik';
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
import { useNavigate } from 'react-router-dom';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    const name = values.email.split('@')[0];
    const formData = {
      email: values.email.trim(),
      password: values.password.trim(),
    };
    try {
      await dispatch(logIn(formData));
      toast.success(`You have successfully logged in ${name}.`, {
        autoClose: 1200,
      });
      console.log(formData);
      navigate('/home');
      resetForm();
    } catch (error) {
      toast.error('Login failed. Please check your credentials.', {
        autoClose: 1200,
      });
    }
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
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
        </LabelStyled>

        <CustomButton type="submit">Log In</CustomButton>
        <CustomButton isNavLink to="/register">
          Register
        </CustomButton>
      </FormStyled>
    </Formik>
  );
};
export default LoginForm;
