import TrailerList from "@/components/featured/TrailerList/TrailerList";
import useMedia from "./hooks/useMedia";
import ImageList from "@/components/featured/ImageList/ImageList";

const Media = () => {
  const { photos, videos } = useMedia();

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
