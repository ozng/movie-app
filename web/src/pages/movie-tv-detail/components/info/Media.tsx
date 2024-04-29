import ImageList from "@/components/ImageList";
import { fetchImages } from "@/services/redux/actions/media";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Media = () => {
  const dispatch = useAppDispatch();
  const { movieDetail } = useSelector((state: RootState) => state.movie);
  const { photos } = useSelector((state: RootState) => state.media);

  useEffect(() => {
    if (movieDetail?.id) {
      dispatch(fetchImages(movieDetail.id));
    }
  }, [dispatch, movieDetail?.id]);

  return photos ? (
    <ImageList title="Images" size="w300" list={photos.backdrops} />
  ) : null;
};

export default Media;
