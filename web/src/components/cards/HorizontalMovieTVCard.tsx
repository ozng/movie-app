import { IMAGE_URL } from "@/constants/tmdb";
import Movie from "@/models/Movie";
import { IoIosStar } from "react-icons/io";

type HorizontalMovieTVCardProps = {
  movieOrTV: Movie;
};

const HorizontalMovieTVCard = ({ movieOrTV }: HorizontalMovieTVCardProps) => {
  const resolution = "/w342";
  const imageBase = IMAGE_URL + resolution;

  return (
    <div className="w-48 flex flex-col gap-2 cursor-pointer hover:scale-105 duration-200">
      <img
        src={imageBase + movieOrTV.poster_path}
        alt="poster"
        className="w-48 rounded-lg h-auto"
      />
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3">
          <h2 className="text-sm font-semibold tracking-tight">
            {movieOrTV.title}
          </h2>
        </div>
        <div className="flex items-start justify-end gap-2 text-faded-2 text-sm font-semibold col-span-1">
          <div className="flex items-center gap-2">
            <IoIosStar className="text-accent" size={16} />
            <span>{movieOrTV.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalMovieTVCard;