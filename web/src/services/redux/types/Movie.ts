import { CollectionReturn } from "@/types/Collection";
import { Movie, MovieDetail } from "@/types/Movie";

export interface MovieState {
  nowPlaying: Movie[] | [];
  loadingNowPlaying: boolean;
  popular: Movie[] | [];
  loadingPopular: boolean;
  topRated: Movie[] | [];
  loadingTopRated: boolean;
  upcoming: Movie[] | [];
  loadingUpcoming: boolean;
  similarMovies: Movie[] | [];
  loadingSimilarMovies: boolean;
  collection: CollectionReturn | null;
  loadingCollection: boolean;
  movieDetail: MovieDetail | null;
  loadingMovieDetail: boolean;
}
