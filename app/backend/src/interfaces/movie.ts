export interface IMovie {
  id: number;
  title: string;
  tagline: string;
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
  findOne(id: number): Promise<IMovie | null>;
  createOne(movie: IMovie): Promise<IMovie | null>;
  findPopular(limit: number): Promise<IMovie[] | null>;
  findTopRated(limit: number): Promise<IMovie[] | null>;
}
