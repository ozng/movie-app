import {
  fetchImages,
  fetchTaggedImages,
} from "@/services/redux/actions/people";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useImages = () => {
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

  return {
    images,
    taggedImages,
  };
};

export default useImages;
