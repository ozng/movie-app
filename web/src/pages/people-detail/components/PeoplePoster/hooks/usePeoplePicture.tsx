import { fetchPeopleMovieCredits } from "@/services/redux/actions/people";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const usePeoplePicture = () => {
  const dispatch = useAppDispatch();
  const { selectedPeople, movies } = useSelector(
    (state: RootState) => state.people
  );

  useEffect(() => {
    if (selectedPeople?.id) {
      dispatch(fetchPeopleMovieCredits(selectedPeople.id));
    }
  }, [dispatch, selectedPeople?.id]);

  return {
    movies,
  };
};

export default usePeoplePicture;
