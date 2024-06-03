import { fetchVideos } from "@/services/redux/actions/media";
import { fetchImages } from "@/services/redux/actions/people";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useMedia = () => {
  const dispatch = useAppDispatch();
  const { movieDetail } = useSelector((state: RootState) => state.movie);
  const { photos, videos } = useSelector((state: RootState) => state.media);

  useEffect(() => {
    if (movieDetail?.id) {
      dispatch(fetchImages(movieDetail.id));
      dispatch(fetchVideos(movieDetail.id));
    }
  }, [dispatch, movieDetail?.id]);

  return {
    photos,
    videos,
  };
};

export default useMedia;
