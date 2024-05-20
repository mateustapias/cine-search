export type Movie = {
  id: number,
  title: string,
  poster_path: string,
  backdrop_path: string,
  overview: string,
  release_date: string,
  runtime: number,
  vote_average: number,
};

export type ShowLogInOrSignUp = {
  show: boolean,
  type: 'logIn' | 'signUp';
};

export type ShowErrorsMessages<T extends string> = {
  [K in T]: string
};

// export type ShowErrorsMessages<T extends string> = {
//   show: boolean,
//   errors: {
//     [K in T]: string
//   };
// };

export type UserData = {
  email: string,
  username: string;
};
