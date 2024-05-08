import '../../styles/components/LogInOrSignUp/LogInPrompt.css';

const LogInPrompt = () => {
  return (
    <div className='c-log-in-prompt'
    >
      <div className='c-log-in-message'>Bem-vindo de volta!</div>
      <form className='log-in-form'>
        <div className='c-email'>
          <label htmlFor='email' className='email-label'>Email</label>
          <input
            autoFocus
            type='email'
            id='email'
            // placeholder='email'
            className='email-input'
          />
        </div>
        <div className='c-password'>
          <label htmlFor='password' className='password-label'>Senha</label>
          <input
            type='password'
            id='password'
            // placeholder='senha'
            className='password-input'
          />
        </div>
        <div className='c-submit-btn'>
          <button type='submit'>Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default LogInPrompt;