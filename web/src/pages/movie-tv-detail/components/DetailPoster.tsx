import { Button } from "@/components/ui/button";
import { Type } from "@/components/ui/typography/type";
import { IMAGE_URL } from "@/constants/tmdb";
import { RootState } from "@/services/redux/store";
import { formatNumber } from "@/utils/format";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const resolution = "/w500";
const imgBase = IMAGE_URL + resolution;

const DetailPoster = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return movieDetail ? (
    <div className="flex flex-col gap-4">
      <div>
        <img src={imgBase + movieDetail?.poster_path} alt="poster" />
      </div>
      <div className="grid grid-cols-2">
        <Link
          to={`https://www.imdb.com/title/${movieDetail.imdb_id}/`}
          target="_blank"
          className="underline hover:text-accent flex items-center justify-center gap-2"
        >
          <FaExternalLinkAlt size={12} />
          IMDB
        </Link>
        <Link
          to={movieDetail.homepage}
          target="_blank"
          className="underline hover:text-accent flex items-center justify-center gap-2"
        >
          <FaExternalLinkAlt size={12} />
          Offical Site
        </Link>
      </div>
      <div className="flex gap-4">
        <Button className="w-full">Trailer</Button>
        <Button className="w-full" variant={"outline"}>
          Pictures
        </Button>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-2">
          <Type size={"sm"} thickness={"semibold"}>
            Budget
          </Type>
          <Type size={"sm"}> ${formatNumber(movieDetail.budget)}</Type>
        </div>
        <div className="grid grid-cols-2">
          <Type size={"sm"} thickness={"semibold"}>
            Revenue
          </Type>
          <Type size={"sm"}> ${formatNumber(movieDetail.revenue)}</Type>
        </div>
      </div>
    </div>
  ) : null;
};

export default DetailPoster;
