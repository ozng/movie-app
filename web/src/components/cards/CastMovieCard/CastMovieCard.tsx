import { MovieCastCredit } from "@/types/Movie";
import { Type } from "../../ui/typography/type";
import { IoIosStar } from "react-icons/io";
import { formatNumber } from "@/utils/format";
import moment from "moment";
import { Link } from "react-router-dom";
import { Title } from "../../ui/typography/title";
import { posterSizes } from "@/constants/imageSizes";

type CastMovieCardProps = {
  movie: MovieCastCredit;
};

const CastMovieCard = ({ movie }: CastMovieCardProps) => {
  return (
    <Link
      to={`/detail/${movie.id}`}
      className="flex gap-2 cursor-pointer p-4 rounded-lg group hover:bg-accent/20 duration-200 "
    >
      <div className="w-[50px] h-[75px]">
        {movie.poster_path ? (
          <img
            src={posterSizes.w154 + movie.poster_path}
            alt="poster"
            className="w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-faded-1" />
        )}
      </div>
      <div className="flex justify-between flex-1">
        <div>
          <Title variant={"h5"}>{movie.title}</Title>
          <div className="flex items-center gap-2">
            <IoIosStar className="text-accent" size={16} />
            <div className="flex items-center gap-1">
              <Type>{movie.vote_average.toFixed(1)}</Type>
              <Type size={"xs"}>({formatNumber(movie.vote_count)})</Type>
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
