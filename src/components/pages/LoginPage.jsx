import LoginForm from '../../Auth/LoginPage/LoginForm';
import { ContentContainer, MainContainer } from '../../Auth/RegistrationPage/RegistrationForm.styled';


const Login = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <LoginForm />
      </ContentContainer>
    </MainContainer>
  );
};

export default Login;
