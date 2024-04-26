import { IMAGE_URL } from "@/constants/tmdb";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const resolution = "/w500";
const imgBase = IMAGE_URL + resolution;

const Poster = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return <img src={imgBase + movieDetail?.poster_path} alt="poster" />;
};

export default Poster;
