import { hideCast, showCast } from "@/services/redux/slices/peopleSlice";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useSelector } from "react-redux";

const useCast = () => {
  const dispatch = useAppDispatch();
  const { filteredMovieCredit, showAllCast } = useSelector(
    (state: RootState) => state.people
  );

  const director = filteredMovieCredit?.crew.filter(
    (item) => item.job === "Director"
  );

  const handleShowAllCast = () => {
    showAllCast ? dispatch(hideCast()) : dispatch(showCast());
  };

  return {
    director,
    handleShowAllCast,
    filteredMovieCredit,
    showAllCast,
  };
};

export default useCast;
