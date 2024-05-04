export interface MovieRoot {
  id: string;
  title: string;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie extends MovieRoot {
  genre_ids: number[];
}

type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type Genres = { id: number; name: string };

type ProductionComponies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCountries = { iso_3166_1: string; name: string };

type SpokenLanguages = {
  iso_3166_1: string;
  english_name: string;
  name: string;
};

export interface MovieDetail extends MovieRoot {
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genres[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionComponies[];
  production_countries: ProductionCountries[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
}

export interface MovieCastCredit extends Movie {
  character: string;
  credit_id: string;
  order: number;
}

export interface MovieCrewCredit extends Movie {
  credit_id: string;
  department: string;
  job: string;
}
