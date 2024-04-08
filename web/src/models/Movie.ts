export default class Movie {
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
    this.id = id;
    this.title = title;
    this.adult = adult;
    this.backdrop_path = backdrop_path;
    this.genre_ids = genre_ids;
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
