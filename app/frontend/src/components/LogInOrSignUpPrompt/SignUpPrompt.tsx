import '../../styles/components/LogInOrSignUp/SignUpPrompt.css';

const SignUpPrompt = () => {
  return (
    <div className='c-sign-up-prompt'>
      <div className='c-sign-up-message'>Crie uma conta para desfrutar 100% do site</div>
      <form className='sign-up-form'>
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
        <div className='c-username'>
          <label htmlFor='username' className='username-label'>Usuário</label>
          <input
            type='text'
            // placeholder='Nome de usuário'
            className='emailInput'
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

export default SignUpPrompt;