import Container from "@/components/Container";
import { fetchMovieDetail } from "@/services/redux/actions/movies";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailPoster from "./components/DetailPoster";
import DetailInformation from "./components/DetailInformation";
import { resetMovieDetail } from "@/services/redux/slices/movieSlice";
import { fetchCastAndCrewsFromSelectedMovie } from "@/services/redux/actions/people";
import { resetCredit } from "@/services/redux/slices/peopleSlice";

const Detail = () => {
  const { id } = useParams();
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetail(id));
      dispatch(fetchCastAndCrewsFromSelectedMovie(id));
    }

    return () => {
      dispatch(resetMovieDetail());
      dispatch(resetCredit());
    };
  }, [id, dispatch]);

  return (
    <div className="min-h-screen py-24">
      <Container>
        {movieDetail ? (
          <div className="grid grid-cols-4 gap-12">
            <div>
              <DetailPoster />
            </div>
            <div className="col-span-3">
              <DetailInformation />
            </div>
          </div>
        ) : null}
      </Container>
    </div>
  );
};

export default Detail;
