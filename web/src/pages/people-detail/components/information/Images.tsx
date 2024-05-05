import ImageList from "@/components/ImageList";
import {
  fetchImages,
  fetchTaggedImages,
} from "@/services/redux/actions/people";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Images = () => {
  const dispatch = useAppDispatch();
  const { selectedPeople, images, taggedImages } = useSelector(
    (state: RootState) => state.people
  );

  useEffect(() => {
    if (selectedPeople?.id) {
      dispatch(fetchImages(selectedPeople.id));
      dispatch(fetchTaggedImages(selectedPeople.id));
    }
  }, [dispatch, selectedPeople?.id]);

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
