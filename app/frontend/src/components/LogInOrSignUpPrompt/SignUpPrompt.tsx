import { useState, ChangeEvent, FormEvent } from 'react';
import { SignUp } from '../../../../backend/src/types/SignUp';
import useAppContext from '../../utils/useAppContext';
import { requestSignUp, setToken } from '../../services/requests';

const SignUpPrompt = () => {
  const { showLogInOrSignUp, setShowLogInOrSignUp, setIsLogged } = useAppContext();
  const [signUpData, setSignUpData] = useState({} as SignUp);
  const [failedSignUpTry, setFailedSignUpTry] = useState<boolean>(false);

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
      // console.log(error.response.data.message)
      setFailedSignUpTry(true);
    }
  };

  return (
    <div className='c-prompt c-sign-up-prompt'>
      <div className='c-message'>Crie uma conta para desfrutar 100% do site</div>
      <form className='form-sign-up' onSubmit={handleSubmit}>
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
        <div className='c-username'>
          <label htmlFor='username' className='label-username'>Usuário</label>
          <input
            type='text'
            id='username'
            name='username'
            className='input-username'
            onChange={handleChange}
          />
        </div>
        <div className='c-password'>
          <label htmlFor='password' className='label-password'>Senha</label>
          <input
            type='password'
            id='password'
            name='password'
            className='input-password'
            onChange={handleChange}
          />
        </div>
        {failedSignUpTry
          && <div className='c-sign-up-failed-message'>Falhou</div>}
        <div className='c-submit-btn'>
          <button type='submit'>Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPrompt;
