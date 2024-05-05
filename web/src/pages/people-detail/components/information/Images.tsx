import ImageList from "@/components/ImageList";
import { fetchImages } from "@/services/redux/actions/people";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Images = () => {
  const dispatch = useAppDispatch();
  const { selectedPeople, images } = useSelector(
    (state: RootState) => state.people
  );

  useEffect(() => {
    if (selectedPeople?.id) {
      dispatch(fetchImages(selectedPeople.id));
    }
  }, [dispatch, selectedPeople?.id]);

  return (
    <div>
      {images && images.profiles && images.profiles.length > 0 ? (
        <ImageList title="Images" list={images?.profiles} />
      ) : null}
    </div>
  );
};

export default Images;
