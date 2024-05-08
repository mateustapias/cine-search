
const LogInPrompt = () => {
  return (
    <div className='c-prompt c-log-in-prompt'
    >
      <div className='c-message'>Bem-vindo de volta!</div>
      <form className='form-log-in'>
        <div className='c-email'>
          <label htmlFor='email' className='label-email'>Email</label>
          <input
            autoFocus
            type='email'
            id='email'
            // placeholder='email'
            className='input-email'
          />
        </div>
        <div className='c-password'>
          <label htmlFor='password' className='label-password'>Senha</label>
          <input
            type='password'
            id='password'
            // placeholder='senha'
            className='input-password'
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