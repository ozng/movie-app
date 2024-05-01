import Container from "@/components/Container";
import { fetchMovieDetail } from "@/services/redux/actions/movies";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailPoster from "./components/DetailPoster";
import DetailInformation from "./components/DetailInformation";
import { resetMovieDetail } from "@/services/redux/slices/movieSlice";
import { fetchCastAndCrewsFromSelectedMovie } from "@/services/redux/actions/people";
import { resetCredit } from "@/services/redux/slices/peopleSlice";
import Similar from "./components/Similar";
import Collection from "./components/Collection";
import { resetMedia } from "@/services/redux/slices/mediaSlice";
import { useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { movieDetail } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetail(id));
      dispatch(fetchCastAndCrewsFromSelectedMovie(id));
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      dispatch(resetMovieDetail());
      dispatch(resetCredit());
      dispatch(resetMedia());
    };
  }, [id, dispatch]);

  useEffect(() => {
    if (movieDetail && movieDetail.title) {
      document.title = movieDetail.title;
    }

    return () => {
      document.title = "RMTV";
    };
  }, [movieDetail]);

  return (
    <div className="min-h-screen py-24">
      <Container className="space-y-24">
        <div className="grid grid-cols-4 gap-12">
          <DetailPoster />
          <DetailInformation />
        </div>
        <Collection />
        <Similar />
      </Container>
    </div>
  );
};

export default Detail;
