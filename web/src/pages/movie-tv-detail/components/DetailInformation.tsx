import AdultContentWarning from "@/components/AdultContentWarning";
import { Title } from "@/components/ui/typography/title";
import { Type } from "@/components/ui/typography/type";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";
import CastAndCrews from "./CastAndCrews";
import Rate from "@/components/Rate";

const DetailInformation = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <Title size={"2xl"} thickness={"bold"}>
            {movieDetail?.title}
          </Title>
          {movieDetail?.title !== movieDetail?.original_title ? (
            <Title variant={"fade-1"}>{movieDetail?.original_title}</Title>
          ) : null}
        </div>
        {movieDetail?.vote_average ? (
          <Rate
            avarage={movieDetail?.vote_average}
            count={movieDetail.vote_count}
          />
        ) : null}
      </div>
      <div className="flex gap-2">
        <Type>{movieDetail?.original_language.toUpperCase()}</Type>
        <Type>|</Type>
        {movieDetail?.spoken_languages.map((item, index) => (
          <Type key={index}>{item.english_name}</Type>
        ))}
      </div>
      <div className="flex gap-4">
        {movieDetail?.genres.map((item) => (
          <Type key={item.id} variant={"fade-2"} size={"sm"}>
            {item.name}
          </Type>
        ))}
      </div>
      {movieDetail?.adult ? <AdultContentWarning /> : null}

      <div className="bg-faded-1/20 p-4 rounded-sm">
        <Type variant={"fade-3"}>{movieDetail?.overview}</Type>
      </div>

      <CastAndCrews />
    </div>
  );
};

export default DetailInformation;
