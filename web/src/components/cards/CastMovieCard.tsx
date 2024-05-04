import { IMAGE_URL } from "@/constants/tmdb";
import { type PosterSizes } from "@/types/ImageSizes";
import { MovieCastCredit } from "@/types/Movie";
import { Type } from "../ui/typography/type";
import { IoIosStar } from "react-icons/io";
import { formatNumber } from "@/utils/format";
import moment from "moment";
import { Link } from "react-router-dom";

type CastMovieCardProps = {
  movie: MovieCastCredit;
};

const resulation: PosterSizes = "w154";
const imgUrl = IMAGE_URL + "/" + resulation;

const CastMovieCard = ({ movie }: CastMovieCardProps) => {
  return (
    <Link
      to={`/detail/${movie.id}`}
      className="flex gap-2 cursor-pointer p-4 rounded-lg group hover:bg-accent/20 duration-200 "
    >
      <div className="w-[50px] h-[75px]">
        {movie.poster_path ? (
          <img
            src={imgUrl + movie.poster_path}
            alt="poster"
            className="w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-faded-1" />
        )}
      </div>
      <div className="flex justify-between flex-1">
        <div>
          <Type thickness={"bold"}>{movie.title}</Type>
          <div className="flex items-center gap-2">
            <IoIosStar className="text-accent" size={16} />
            <div className="flex items-center gap-1">
              <Type variant={"fade-2"}>{movie.vote_average.toFixed(1)}</Type>
              <Type variant={"fade-2"} size={"xs"}>
                ({formatNumber(movie.vote_count)})
              </Type>
            </div>
          </div>
          <Type>{movie.character}</Type>
        </div>

        {movie.release_date ? (
          <Type thickness={"bold"}>
            {moment(movie.release_date).format("YYYY")}
          </Type>
        ) : null}
      </div>
    </Link>
  );
};

export default CastMovieCard;
