import { ImageReturnType, VideoReturnType } from "@/types/Media";

export interface MediaState {
  photos: ImageReturnType | null;
  loadingPhotos: boolean;
  videos: VideoReturnType | null;
  loadingVideos: boolean;
}
