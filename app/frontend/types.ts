export type Movie = {
  id: number,
  title: string,
  poster_path: string,
  overview: string,
  release_date: string,
  runtime: number,
  vote_average: number,
}

export type ShowLogInOrSignUp = {
  show: boolean,
  type: 'logIn' | 'signUp'
}

export type UserData = {
  email: string,
  username: string
}