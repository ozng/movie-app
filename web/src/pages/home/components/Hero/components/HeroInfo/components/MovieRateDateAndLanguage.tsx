import { Type } from "@/components/ui/typography/type";
import moment from "moment";

type MovieRateDateAndLanguageProps = {
  voteAvarage: number;
  releaseDate: string;
  originalLanguage: string;
  voteCount: number;
};

const MovieRateDateAndLanguage = ({
  originalLanguage,
  releaseDate,
  voteAvarage,
  voteCount,
}: MovieRateDateAndLanguageProps) => {
  return (
    <div className="flex gap-2 text-faded-1 text-sm">
      <Type textColor={"accent"}>TMDB</Type>
      <Type textColor={"fade-2"}>{voteAvarage}</Type>
      <Type textColor={"fade-2"}>({voteCount})</Type>
      <Type>|</Type>
      <Type textColor={"fade-2"}>{moment(releaseDate).format("YYYY")}</Type>
      <Type>|</Type>
      <Type textColor={"fade-2"}>{originalLanguage}</Type>
    </div>
  );
};

export default MovieRateDateAndLanguage;
