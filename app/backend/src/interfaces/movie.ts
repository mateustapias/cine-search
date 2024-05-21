export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  // backdrop_path: string;
  overview: string;
  release_date: string;
  // runtime: number;
  vote_average: number;
}

export interface IMovieModel {
  findMany(limit: number): Promise<IMovie[] | null>;
}