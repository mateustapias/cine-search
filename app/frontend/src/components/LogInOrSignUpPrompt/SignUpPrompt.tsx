
const SignUpPrompt = () => {
  return (
    <div className='c-prompt'>
      <div className='c-message c-sign-up-prompt'>Crie uma conta para desfrutar 100% do site</div>
      <form className='sign-up-form'>
        <div className='c-email'>
          <label htmlFor='email' className='label-email'>Email</label>
          <input
            autoFocus
            type='email'
            id='email'
            className='input-email'
          />
        </div>
        <div className='c-username'>
          <label htmlFor='username' className='label-username'>Usuário</label>
          <input
            type='text'
            id='username'
            className='input-username'
          />
        </div>
        <div className='c-password'>
          <label htmlFor='password' className='label-password'>Senha</label>
          <input
            type='password'
            id='password'
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

export default SignUpPrompt;