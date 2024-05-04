import PeopleMovieCastList from "@/components/PeopleMovieCastList";
import { Type } from "@/components/ui/typography/type";
import { fetchPeopleMovieCredits } from "@/services/redux/actions/people";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PeopleMovies = () => {
  const dispatch = useAppDispatch();
  const { selectedPeople, movies } = useSelector(
    (state: RootState) => state.people
  );

  useEffect(() => {
    if (selectedPeople?.id) {
      dispatch(fetchPeopleMovieCredits(selectedPeople.id));
    }
  }, [dispatch, selectedPeople?.id]);

  return (
    <div className="space-y-4">
      <Type thickness={"semibold"}>Movies</Type>
      {movies && movies.cast && movies.cast.length > 0 ? (
        <PeopleMovieCastList castList={movies.cast} />
      ) : null}
    </div>
  );
};

export default PeopleMovies;
