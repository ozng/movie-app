import ImageList from "@/components/ImageList";
import TrailerList from "@/components/TrailerList";
import { fetchImages, fetchVideos } from "@/services/redux/actions/media";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Media = () => {
  const dispatch = useAppDispatch();
  const { movieDetail } = useSelector((state: RootState) => state.movie);
  const { photos, videos } = useSelector((state: RootState) => state.media);

  useEffect(() => {
    if (movieDetail?.id) {
      dispatch(fetchImages(movieDetail.id));
      dispatch(fetchVideos(movieDetail.id));
    }
  }, [dispatch, movieDetail?.id]);

  return (
    <div className="flex flex-col gap-4">
      {videos && videos.results && videos.results.length > 0 ? (
        <TrailerList
          videos={videos.results.filter((item) => item.type === "Trailer")}
        />
      ) : null}
      {photos ? (
        <ImageList title="Images" size="w300" list={photos.backdrops} />
      ) : null}
    </div>
  );
};

export default Media;
