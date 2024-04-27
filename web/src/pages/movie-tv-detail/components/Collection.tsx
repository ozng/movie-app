import HorizontalMovieTVList from "@/components/HorizontalMovieTVList";
import { fetchMoviesCollection } from "@/services/redux/actions/movies";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Collection = () => {
  const { movieDetail, collection } = useSelector(
    (state: RootState) => state.movie
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (movieDetail?.belongs_to_collection) {
      dispatch(fetchMoviesCollection(movieDetail.belongs_to_collection.id));
    }
  }, [dispatch, movieDetail?.belongs_to_collection]);

  return movieDetail?.belongs_to_collection ? (
    <div>
      {collection ? (
        <HorizontalMovieTVList
          title={collection.name}
          list={collection.parts}
        />
      ) : null}
    </div>
  ) : null;
};

export default Collection;
