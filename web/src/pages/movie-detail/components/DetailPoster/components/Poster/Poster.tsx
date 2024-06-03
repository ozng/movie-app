import { posterSizes } from "@/constants/imageSizes";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const Poster = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return <img src={posterSizes.w500 + movieDetail?.poster_path} alt="poster" />;
};

export default Poster;
