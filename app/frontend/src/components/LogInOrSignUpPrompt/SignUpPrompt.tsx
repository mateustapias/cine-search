const SignUpPrompt = () => {
  return (
    <div className='signUpPrompt'>
      <div className='signUpMessage'>Crie uma conta para desfrutar 100% do site</div>
      <input
        autoFocus
        type='email'
        placeholder='Email'
        className='emailInput'
      />
      <input
        type='text'
        placeholder='Nome de usuário'
        className='emailInput'
      />
      <input
        type='password'
        placeholder='senha'
        className='passwordInput'
      />
      <button type='submit'>Entrar</button>
    </div>
  );
};

export default SignUpPrompt;