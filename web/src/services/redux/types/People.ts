import { CastAndCrewReturnType } from "@/services/tmdb/people";
import {
  PeopleImagesReturnType,
  PeopleTaggedImageReturnType,
} from "@/types/Media";
import { MovieCreditsReturn, People } from "@/types/People";

export interface PeopleState {
  selectedPeople: People | null;
  loadingSelectedPeople: boolean;
  selectedMovieCredit: CastAndCrewReturnType | null;
  filteredMovieCredit: CastAndCrewReturnType | null;
  loadingCastAndCrew: boolean;
  showAllCast: boolean;
  movies: MovieCreditsReturn | null;
  loadingMovies: boolean;
  images: PeopleImagesReturnType | null;
  loadingImages: boolean;
  taggedImages: PeopleTaggedImageReturnType | null;
  loadingTaggedImages: boolean;
}
