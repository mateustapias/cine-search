import { useState, ChangeEvent, FormEvent } from 'react';
import { isAxiosError } from 'axios';
import { SignUp } from '../../../../backend/src/types/SignUp';
import useAppContext from '../../utils/useAppContext';
import { requestSignUp, setToken } from '../../services/requests';
import { ShowErrorsMessages } from '../../../types';

const SignUpPrompt = () => {
  const INITIAL_SHOW_ERRORS_MESSAGES_STATE: ShowErrorsMessages<'email' | 'username' | 'password'> = {
    show: false,
    errors: {
      email: '',
      username: '',
      password: '',
    },
  };
  const INITIAL_SHOW_OTHER_ERRORS: ShowErrorsMessages<'userExists'> = {
    show: false,
    errors: {
      userExists: '',
    },
  };
  const { showLogInOrSignUp, setShowLogInOrSignUp, setIsLogged } = useAppContext();
  const [signUpData, setSignUpData] = useState({} as SignUp);
  const [showErrorsMessages,
    setShowErrorsMessages] = useState(INITIAL_SHOW_ERRORS_MESSAGES_STATE);
  const { show, errors } = showErrorsMessages;
  const [showOtherErrors, setShowOtherErrors] = useState(INITIAL_SHOW_OTHER_ERRORS);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value: targetValue } } = event;
    setSignUpData({ ...signUpData, [name]: targetValue });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { token, userData } = await requestSignUp('/signUp', signUpData);

      setToken(token);
      setIsLogged(true);
      setShowLogInOrSignUp({ ...showLogInOrSignUp, show: false });
      const userDataSTR = JSON.stringify(userData);

      sessionStorage.setItem('userData', userDataSTR);
    } catch (error) {
      if (isAxiosError(error)
        && error.response) {
        const { message } = error.response.data;
        if (error.response.status === 409) {
          setShowOtherErrors({ show: true, errors: { userExists: message } });
          setShowErrorsMessages({ ...showErrorsMessages, show: false });
        } else {
          setShowErrorsMessages({ show: true, errors: message });
        }
      }
    }
  };

  return (
    <div className='c-prompt c-sign-up-prompt'>
      <div className='c-message'>Crie uma conta para desfrutar 100% do site</div>
      <form className='form-sign-up' onSubmit={handleSubmit}>
        <div className='c-email' >
          <label htmlFor='email' className='label-email'>Email</label>
          <input
            autoFocus
            type='email'
            id='email'
            name='email'
            className={`input-email ${errors.email ? 'invalid' : ''}`}
            onChange={handleChange}
          />
          {show && errors.email
            && <div className='c-error-msg'>{errors.email}</div>}
        </div>
        <div className='c-username'>
          <label htmlFor='username' className='label-username'>Usuário</label>
          <input
            type='text'
            id='username'
            name='username'
            className={`input-username ${errors.username ? 'invalid' : ''}`}
            onChange={handleChange}
          />
          {show && errors.username
            && <div className='c-error-msg'>{errors.username}</div>}
        </div>
        <div className='c-password'>
          <label htmlFor='password' className='label-password'>Senha</label>
          <input
            type='password'
            id='password'
            name='password'
            className={`input-password ${errors.password ? 'invalid' : ''}`}
            onChange={handleChange}
          />
          {show && errors.password
            && <div className='c-error-msg'>{errors.password}</div>}
        </div>
        {showOtherErrors.errors
          && <div className='c-error-msg'>{showOtherErrors.errors.userExists}</div>}
        <div className='c-submit-btn'>
          <button type='submit'>Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPrompt;
