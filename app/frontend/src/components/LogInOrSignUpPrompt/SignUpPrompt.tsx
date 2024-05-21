import { useState, ChangeEvent, FormEvent } from 'react';
import { isAxiosError } from 'axios';
import { SignUp } from '../../../../backend/src/types/SignUp';
import useAppContext from '../../utils/useAppContext';
import { requestSignUp, setToken } from '../../services/requests';
import { ShowErrorsMessages } from '../../../types';

// Propositalmente fazendo de um modo diferente de LogInPrompt
const SignUpPrompt = () => {
  const { showLogInOrSignUp, setShowLogInOrSignUp, setUserRequest } = useAppContext();

  const INITIAL_FIELDS_ERRORS: ShowErrorsMessages<'email' | 'username' | 'password'> = {
    email: '',
    username: '',
    password: '',
  };
  const INITIAL_OTHER_ERRORS: ShowErrorsMessages<'userExists'> = {
    userExists: '',
  };
  const [signUpData, setSignUpData] = useState({} as SignUp);
  const [fieldsErrors, setFieldsErrors] = useState(INITIAL_FIELDS_ERRORS);
  const { email, username, password } = fieldsErrors;
  const [otherErrors, setOtherErrors] = useState(INITIAL_OTHER_ERRORS);
  const { userExists } = otherErrors;

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value: targetValue } } = event;
    setSignUpData({ ...signUpData, [name]: targetValue });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { token, userData } = await requestSignUp('/signUp', signUpData);

      setToken(token);
      setUserRequest(true);
      setShowLogInOrSignUp({ ...showLogInOrSignUp, show: false });
      const userDataSTR = JSON.stringify(userData);

      sessionStorage.setItem('userData', userDataSTR);
      setUserRequest(true);
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const { message } = error.response.data;

        if (error.response.status === 409) {
          setOtherErrors({ userExists: message });
          setFieldsErrors(INITIAL_FIELDS_ERRORS);
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
          {email
            && <div className='c-error-msg'>{email}</div>}
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
          {username
            && <div className='c-error-msg'>{username}</div>}
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
          {password
            && <div className='c-error-msg'>{password}</div>}
        </div>
        {userExists
          && <div className='c-error-msg'>{userExists}</div>}
        <div className='c-submit-btn'>
          <button type='submit'>Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPrompt;
