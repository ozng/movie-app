import { Movie } from "./Movie";

export type ImageReturnType = {
  id: number;
  backdrops: BackdropType[];
  logos: LogoType[];
  posters: PosterType[];
};

export interface BackdropType {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface LogoType extends BackdropType {}

export interface PosterType extends BackdropType {}

export type VideosType = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: string;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}[];

export type VideoReturnType = {
  id: number;
  results: VideosType;
};

export interface PeopleImagesReturnType {
  id: number;
  profiles: BackdropType[];
}

interface TaggedImageMediaType extends Movie {
  media_type: string;
}

export interface TaggedImageType extends BackdropType {
  id: string;
  image_type: string;
  media_type: string;
  media: TaggedImageMediaType;
}

export interface PeopleTaggedImageReturnType {
  id: number;
  page: number;
  results: TaggedImageType[];
  total_pages: number;
  total_results: number;
}
