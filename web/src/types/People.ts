interface PeopleRoot {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
}

export interface People extends PeopleRoot {
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  homepage: string;
  imdb_id: string;
  place_of_birth: string;
}

export interface Cast extends PeopleRoot {
  cast_id: number;
  character: string;
  order: number;
  original_name: string;
}

export interface Crew extends PeopleRoot {
  department: string;
  job: string;
  original_name: string;
}
