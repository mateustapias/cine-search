const errorMessages = {
  email: {
    required: 'O email deve estar preenchido',
    empty: 'O email deve estar preenchido',
    invalid: 'O email não é válido',
  },
  password: {
    required: 'A senha deve estar preenchida',
    empty: 'A senha deve estar preenchida',
    min: 'A senha deve ter no mínimo {{#limit}} caracteres',
    max: 'A senha deve ter no máximo {{#limit}} caracteres',
  },
  username: {
    required: 'O usuário deve estar preenchido',
    empty: 'O usuário deve estar preenchido',
    min: 'O usuário deve ter no mínimo {{#limit}} caracteres',
    max: 'O usuário deve ter no máximo {{#limit}} caracteres',
  },
};

export default errorMessages;
