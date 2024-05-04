import { MovieRoot } from "./Movie";

export type CollectionReturn = {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  parts: CollectionDetail[];
};

export interface CollectionDetail extends MovieRoot {
  media_type: string;
  genre_ids: number[];
}
