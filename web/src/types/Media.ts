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
