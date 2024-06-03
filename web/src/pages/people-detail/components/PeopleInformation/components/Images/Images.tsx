import ImageList from "@/components/ImageList";
import useImages from "./hooks/useImages";

const Images = () => {
  const { images, taggedImages } = useImages();

  return (
    <div>
      {images && images.profiles && images.profiles.length > 0 ? (
        <ImageList title="Images" list={images?.profiles} />
      ) : null}
      {taggedImages &&
      taggedImages.results &&
      taggedImages.results.length > 0 ? (
        <ImageList title="Tagged Images" list={taggedImages?.results} />
      ) : null}
    </div>
  );
};

export default Images;
