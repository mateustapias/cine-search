import '../../styles/components/LogInOrSignUp/LogInPrompt.css';

const LogInPrompt = () => {

  return (
    <form className='log-in-prompt'
    >
      <div className='c-log-in-message'>Bem-vindo de volta!</div>
      <div className='c-email'>
        <input
          autoFocus
          type='email'
          placeholder='email'
          className='email-input'
        />
      </div>
      <div className='c-password'>
        <input
          type='password'
          placeholder='senha'
          className='password-input'
        />
      </div>
      <div className='c-submit-btn'>
        <button type='submit'>Entrar</button>
      </div>
    </form>
  );
};

export default LogInPrompt;