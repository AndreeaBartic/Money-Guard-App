// RegistrationPage.js
import RegisterForm from '../../Auth/RegistrationPage/RegistrationForm';
import {
  ContentContainer,
  MainContainer,
} from '../../Auth/RegistrationPage/RegistrationForm.styled';

const Register = () => {
  return (
    <MainContainer isRegister={true}>
      <ContentContainer>
        <RegisterForm />
      </ContentContainer>
    </MainContainer>
  );
};

export default Register;