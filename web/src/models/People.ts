export class PeopleRoot {
  constructor(
    public adult: boolean,
    public gender: number,
    public id: number,
    public known_for_department: string,
    public name: string,
    public popularity: number,
    public profile_path: string,
    public credit_id: string
  ) {
    this.adult = adult;
    this.gender = gender;
    this.id = id;
    this.known_for_department = known_for_department;
    this.popularity = popularity;
    this.profile_path = profile_path;
    this.credit_id = credit_id;
  }
}

export default class People extends PeopleRoot {
  constructor(
    public adult: boolean,
    public gender: number,
    public id: number,
    public known_for_department: string,
    public name: string,
    public popularity: number,
    public profile_path: string,
    public credit_id: string,
    public also_known_as: string[],
    public biography: string,
    public birthday: string,
    public deathday: string,
    public homepage: string,
    public imdb_id: string,
    public place_of_birth: string
  ) {
    super(
      adult,
      gender,
      id,
      known_for_department,
      name,
      popularity,
      profile_path,
      credit_id
    );
    this.also_known_as = also_known_as;
    this.biography = biography;
    this.birthday = birthday;
    this.deathday = deathday;
    this.homepage = homepage;
    this.imdb_id = imdb_id;
    this.place_of_birth = place_of_birth;
  }
}

export class Cast extends PeopleRoot {
  constructor(
    public adult: boolean,
    public gender: number,
    public id: number,
    public known_for_department: string,
    public name: string,
    public original_name: string,
    public popularity: number,
    public profile_path: string,
    public cast_id: number,
    public character: string,
    public order: number,
    public credit_id: string
  ) {
    super(
      adult,
      gender,
      id,
      known_for_department,
      name,
      popularity,
      profile_path,
      credit_id
    );
    this.cast_id = cast_id;
    this.character = character;
    this.order = order;
    this.original_name = original_name;
  }
}

export class Crew extends PeopleRoot {
  constructor(
    public adult: boolean,
    public gender: number,
    public id: number,
    public known_for_department: string,
    public name: string,
    public original_name: string,
    public popularity: number,
    public profile_path: string,
    public credit_id: string,
    public department: string,
    public job: string
  ) {
    super(
      adult,
      gender,
      id,
      known_for_department,
      name,
      popularity,
      profile_path,
      credit_id
    );
    this.department = department;
    this.job = job;
    this.original_name = original_name;
  }
}
