import { IMAGE_URL } from "@/constants/tmdb";
import { Movie } from "@/models/Movie";
import { IoIosStar } from "react-icons/io";
import { Title } from "../ui/typography/title";
import { Type } from "../ui/typography/type";
import { Link } from "react-router-dom";

type HorizontalMovieTVCardProps = {
  movieOrTV: Movie;
};

const HorizontalMovieTVCard = ({ movieOrTV }: HorizontalMovieTVCardProps) => {
  const resolution = "/w342";
  const imageBase = IMAGE_URL + resolution;

  return (
    <Link
      to={`/detail/${movieOrTV.id}`}
      className="w-48 flex flex-col gap-2 cursor-pointer hover:scale-105 duration-200"
    >
      {movieOrTV.poster_path ? (
        <img
          src={imageBase + movieOrTV.poster_path}
          alt="poster"
          className="w-48 rounded-lg h-[288px]"
        />
      ) : (
        <div className="w-48 bg-faded-1 rounded-lg flex h-[288px]" />
      )}

      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3">
          <Title size={"sm"} thickness={"semibold"} className="tracking-tight">
            {movieOrTV.title}
          </Title>
        </div>
        <div className="flex items-start justify-end gap-2 text-faded-2 text-sm font-semibold col-span-1">
          <div className="flex items-center gap-2">
            <IoIosStar className="text-accent" size={16} />
            <Type>{movieOrTV.vote_average.toFixed(1)}</Type>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalMovieTVCard;
