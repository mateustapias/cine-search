import { ChangeEvent, FormEvent, useState } from 'react';
import { requestLogin, setToken } from '../../services/requests';
import { Login } from '../../../../backend/src/types/Login';

const LogInPrompt = () => {
  const [logInData, setLogInData] = useState<Login>({} as Login);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value: targetValue } } = event;
    setLogInData({ ...logInData, [name]: targetValue });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { token } = await requestLogin('/login', logInData);

      setToken(token);

      // localStorage.setItem('token', token);

      // setIsLogged(true);
      console.log(token);
    } catch (error) {
      // setFailedTryLogin(true);
      // setIsLogged(false);
      console.log('ERRO!');
      console.log(error);
    }
  };

  return (
    <div className='c-prompt c-log-in-prompt'
    >
      <div className='c-message'>Bem-vindo de volta!</div>
      <form className='form-log-in' onSubmit={handleSubmit}>
        <div className='c-email'>
          <label htmlFor='email' className='label-email'>Email</label>
          <input
            autoFocus
            type='email'
            id='email'
            name='email'
            className='input-email'
            onChange={handleChange}
          />
        </div>
        <div className='c-password'>
          <label htmlFor='password' className='label-password'>Senha</label>
          <input
            type='password'
            id='password'
            // placeholder='senha'
            name='password'
            className='input-password'
            onChange={handleChange}
          />
        </div>
        <div className='c-submit'>
          <button type='submit'>Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default LogInPrompt;