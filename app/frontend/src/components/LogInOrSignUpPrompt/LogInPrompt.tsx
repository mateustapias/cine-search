import '../../styles/components/LogInOrSignUp/LogInPrompt.css';
import useAppContext from '../../utils/useAppContext';
import { FocusEvent } from 'react';

const LogInPrompt = () => {
  const { setShowLogInOrSignUp } = useAppContext();



  return (
    <div className='logInPrompt'
    >
      SignUp
      <input type='email' placeholder='Email' autoFocus />
      <input type='password' placeholder='Senha' />
      <button type='submit'>Entrar</button>
    </div>
  );
};

export default LogInPrompt;