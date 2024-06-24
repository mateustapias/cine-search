export const schemaErrorMessages = {
  user: {
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
  },
  review: {
    id: {
      required: 'O id da resenha está faltando',
      number: 'O id da resenha deve ser um número',
    },
    rating: {
      required: 'A avaliação deve estar preenchida',
      empty: 'A avaliação deve estar preenchida',
      number: 'A avaliação deve ser um número',
      integer: 'A avaliação deve ser um número inteiro',
      min: 'A avaliação deve ser um número maior que {{#limit}}',
      max: 'A avaliação deve ser um número menor que {{#limit}}',
    },
    text: {
      required: 'A resenha do filme deve estar preenchida',
      empty: 'A resenha do filme deve estar preenchida',
      max: 'A resenha do filme deve ter no máximo {{#limit}} caracteres',
    },
    movieId: {
      required: 'O id do filme está faltando',
      number: 'O id do filme deve ser um número',
    },
  },
};

export const dataBaseErrorMessage = 'Erro ao consultar o banco de dados';
