import { Movie } from "@/types/Movie";
import { Type } from "../ui/typography/type";
import { IMAGE_URL } from "@/constants/tmdb";
import { PosterSizes } from "@/types/ImageSizes";
import { IoIosStar } from "react-icons/io";
import { formatNumber } from "@/utils/format";
import moment from "moment";
import { Link } from "react-router-dom";

type VerticalMovieTvCardProps = {
  movie: Movie;
};

const resolution: PosterSizes = "w154";

const VerticalMovieTvCard = ({ movie }: VerticalMovieTvCardProps) => {
  return (
    <div className="flex gap-4">
      <div className="">
        {movie.poster_path ? (
          <img
            src={`${IMAGE_URL}/${resolution}${movie.poster_path}`}
            alt="poster"
          />
        ) : (
          <div className={`w-[139px] bg-faded-1 h-[208px]`} />
        )}
      </div>
      <div className="w-full space-y-4">
        <div className="flex justify-between items-center flex-1">
          <div>
            <Link to={`/detail/${movie.id}`}>
              <Type
                size={"lg"}
                thickness={"semibold"}
                className="hover:underline"
              >
                {movie.title}
              </Type>
            </Link>
            <div>
              <Type thickness={"bold"} size={"xs"} variant={"fade-1"}>
                {moment(movie.release_date).format("YYYY")}
              </Type>
            </div>
          </div>
          <div className="flex items-start justify-end gap-2 text-faded-2 text-sm font-semibold col-span-1">
            <div className="flex items-center gap-2">
              <IoIosStar className="text-accent" size={24} />
              <Type size={"xl"}>{movie.vote_average.toFixed(1)}</Type>
              <Type size={"xs"}>({formatNumber(movie.vote_count)})</Type>
            </div>
          </div>
        </div>

        <div className="w-5/6">
          <Type size={"sm"} className="text-justify">
            {movie.overview}
          </Type>
        </div>
      </div>
    </div>
  );
};

export default VerticalMovieTvCard;