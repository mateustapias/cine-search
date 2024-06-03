export type Movie = {
  id: number,
  title: string,
  tagline: string,
  adult: boolean,
  overview: string,
  popularity: number,
  release_date: string,
  vote_average: number,
  poster_path: string,
  backdrop_path: string,
  runtime: number,
};

export type ShowLogInOrSignUp = {
  show: boolean,
  type: 'logIn' | 'signUp';
};

export type UserData = {
  email: string,
  username: string;
};
