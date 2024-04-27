import { CollectionDetail } from "@/models/Movie";

export type CollectionReturn = {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  parts: CollectionDetail[];
};
