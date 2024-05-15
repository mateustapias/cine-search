import {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import { requestLogIn, setToken } from '../../services/requests';
import { LogIn } from '../../../../backend/src/types/Login';
import useAppContext from '../../utils/useAppContext';

// Propositalmente fazendo de um modo diferente de SignUpPrompt
const LogInPrompt = () => {
  const { showLogInOrSignUp, setShowLogInOrSignUp, setIsLogged } = useAppContext();
  const [logInData, setLogInData] = useState<LogIn>({} as LogIn);
  const [failedLogInTry, setFailedLogInTry] = useState<boolean>(false);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value: targetValue } } = event;
    setLogInData({ ...logInData, [name]: targetValue });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { token, userData } = await requestLogIn('/logIn', logInData);

      setToken(token);
      setIsLogged(true);
      setShowLogInOrSignUp({ ...showLogInOrSignUp, show: false });
      const userDataSTR = JSON.stringify(userData);

      sessionStorage.setItem('userData', userDataSTR);
    } catch (error) {
      setFailedLogInTry(true);
    }
  };

  useEffect(() => {
    setFailedLogInTry(false);
  }, [logInData.email, logInData.password]);

  return (
    <div className='c-prompt c-log-in-prompt'
    >
      <div className='c-message'>Bem-vindo de volta!</div>
      <form className='form-log-in' onSubmit={handleSubmit}>
        <div className='c-email'>
          <label htmlFor='email' className='label-email'>Email</label>
          <input
            autoFocus
            id='email'
            name='email'
            className={`input-email${failedLogInTry ? ' invalid' : ''}`}
            onChange={handleChange}
          />
        </div>
        <div className='c-password'>
          <label htmlFor='password' className='label-password'>Senha</label>
          <input
            type='password'
            id='password'
            name='password'
            className={`input-email${failedLogInTry ? ' invalid' : ''}`}
            onChange={handleChange}
          />
        </div>
        {failedLogInTry
          && <div className='c-error-msg'>Email e/ou senha inválidos</div>
        }
        <div className='c-submit-btn'>
          <button type='submit'>Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default LogInPrompt;
