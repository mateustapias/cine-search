export interface IMovie {
  id: number;
  title: string;
  adult: boolean;
  overview: string;
  popularity: number;
  release_date: string;
  vote_average: number;
  runtime?: number;
  poster_path: string;
  backdrop_path: string;
}

export interface IMovieModel {
  findMany(limit: number): Promise<IMovie[] | null>;
  findOne(id: number): Promise<IMovie | null>;
  createOne(movie: IMovie): Promise<IMovie | null>;
}
