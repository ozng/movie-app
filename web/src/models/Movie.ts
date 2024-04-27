class MovieRoot {
  constructor(
    public id: string,
    public title: string,
    public adult: boolean,
    public backdrop_path: string,
    public original_language: string,
    public original_title: string,
    public overview: string,
    public popularity: number,
    public poster_path: string,
    public release_date: string,
    public video: boolean,
    public vote_average: number,
    public vote_count: number
  ) {
    this.id = id;
    this.title = title;
    this.adult = adult;
    this.backdrop_path = backdrop_path;
    this.original_language = original_language;
    this.original_title = original_title;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.video = video;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }
}
export class Movie extends MovieRoot {
  constructor(
    public id: string,
    public title: string,
    public adult: boolean,
    public backdrop_path: string,
    public genre_ids: number[],
    public original_language: string,
    public original_title: string,
    public overview: string,
    public popularity: number,
    public poster_path: string,
    public release_date: string,
    public video: boolean,
    public vote_average: number,
    public vote_count: number
  ) {
    super(
      id,
      title,
      adult,
      backdrop_path,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      video,
      vote_average,
      vote_count
    );
    this.genre_ids = genre_ids;
  }
}
export class MovieDetail extends MovieRoot {
  constructor(
    public id: string,
    public title: string,
    public adult: boolean,
    public backdrop_path: string,
    public genre_ids: number[],
    public original_language: string,
    public original_title: string,
    public overview: string,
    public popularity: number,
    public poster_path: string,
    public release_date: string,
    public video: boolean,
    public vote_average: number,
    public vote_count: number,
    public belongs_to_collection: {
      id: number;
      name: string;
      poster_path: string;
      backdrop_path: string;
    },
    public budget: number,
    public genres: { id: number; name: string }[],
    public homepage: string,
    public imdb_id: string,
    public production_companies: {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }[],
    public production_countries: { iso_3166_1: string; name: string }[],
    public revenue: number,
    public runtime: number,
    public spoken_languages: {
      iso_3166_1: string;
      english_name: string;
      name: string;
    }[],
    public status: string,
    public tagline: string
  ) {
    super(
      id,
      title,
      adult,
      backdrop_path,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      video,
      vote_average,
      vote_count
    );
    this.belongs_to_collection = belongs_to_collection;
    this.budget = budget;
    this.genres = genres;
    this.homepage = homepage;
    this.imdb_id = imdb_id;
    this.production_companies = production_companies;
    this.production_countries = production_countries;
    this.revenue = revenue;
    this.runtime = runtime;
    this.spoken_languages = spoken_languages;
    this.status = status;
    this.tagline = tagline;
  }
}

export class CollectionDetail extends MovieRoot {
  constructor(
    public id: string,
    public title: string,
    public adult: boolean,
    public backdrop_path: string,
    public original_language: string,
    public original_title: string,
    public overview: string,
    public popularity: number,
    public poster_path: string,
    public release_date: string,
    public video: boolean,
    public vote_average: number,
    public vote_count: number,
    public media_type: string,
    public genre_ids: number[]
  ) {
    super(
      id,
      title,
      adult,
      backdrop_path,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      video,
      vote_average,
      vote_count
    );
    this.media_type = media_type;
    this.genre_ids = genre_ids;
  }
}
