export interface IMoviesList {
  id?: number;
  title: string;
  description: string;
  rgbColor: string;
  userId: number;
}

export interface IMoviesInList {
  moviesListId: number;
  movieId: number;
}

export interface IMoviesListModel {
  findAllByUser(userId: number): Promise<IMoviesList[] | null>
}
