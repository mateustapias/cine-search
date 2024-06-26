import { ChangeEvent, FormEvent, useState } from 'react';
import { isAxiosError } from 'axios';
import { useAppContext } from '../../utils';
import { requestSignUp, setToken } from '../../services/requests';
import { SignUp } from '../../../../backend/src/types/SignUp';
import useErrorMessages from '../../hooks/useErrorMessages';

const SignUpPrompt = () => {
  const { showLogInOrSignUp, setShowLogInOrSignUp, setUserRequest } = useAppContext();

  const [signUpData, setSignUpData] = useState({} as SignUp);

  const fieldsError = ['email', 'username', 'password'];
  const otherError = ['userExists'];
  const [fieldsErrors, setFieldsErrors, INITIAL_FIELDS_ERRORS] = useErrorMessages(fieldsError);
  const { email, username, password } = fieldsErrors;
  const [otherErrors, setOtherErrors, INITIAL_OTHER_ERRORS] = useErrorMessages(otherError);
  const { userExists } = otherErrors;

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value: targetValue } } = event;

    setSignUpData({ ...signUpData, [name]: targetValue });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { token, userData } = await requestSignUp(signUpData);

      setToken(token);
      setUserRequest(true);
      setShowLogInOrSignUp({ ...showLogInOrSignUp, show: false });
      const userDataSTR = JSON.stringify(userData);

      sessionStorage.setItem('userData', userDataSTR);
      setUserRequest(true);
      window.location.reload();
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const { message } = error.response.data;

        // Erro de banco
        if (error.response.status === 409) {
          setOtherErrors({ userExists: message });
          setFieldsErrors(INITIAL_FIELDS_ERRORS);
          // Erro de validação
        } else {
          setOtherErrors(INITIAL_OTHER_ERRORS);
          setFieldsErrors(message);
        }
      }
    }
  };

  return (
    <div className='c-prompt c-sign-up-prompt'>
      <div className='c-message'>Crie uma conta para desfrutar 100% do site!</div>
      <form className='form-sign-up' onSubmit={handleSubmit}>
        <div className='c-email' >
          <label htmlFor='email' className='label-email'>Email</label>
          <input
            autoFocus
            id='email'
            name='email'
            className={`input-email${email ? ' invalid' : ''}`}
            onChange={handleChange}
          />
          {email && (
            <div className='c-error-msg'>{email}</div>
          )}
        </div>
        <div className='c-username'>
          <label htmlFor='username' className='label-username'>Usuário</label>
          <input
            type='text'
            id='username'
            name='username'
            className={`input-username${username ? ' invalid' : ''}`}
            onChange={handleChange}
          />
          {username && (
            <div className='c-error-msg'>{username}</div>
          )}
        </div>
        <div className='c-password'>
          <label htmlFor='password' className='label-password'>Senha</label>
          <input
            type='password'
            id='password'
            name='password'
            className={`input-password${password ? ' invalid' : ''}`}
            onChange={handleChange}
          />
          {password && (
            <div className='c-error-msg'>{password}</div>
          )}
        </div>
        {userExists && (
          <div className='c-error-msg'>{userExists}</div>
        )}
        <div className='c-submit-btn'>
          <button type='submit'>Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPrompt;
