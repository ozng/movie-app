import AdultContentWarning from "@/components/AdultContentWarning";
import { Title } from "@/components/ui/typography/title";
import { Type } from "@/components/ui/typography/type";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const DetailInformation = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  console.log(movieDetail);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Title size={"2xl"} thickness={"bold"}>
          {movieDetail?.title}
        </Title>
        {movieDetail?.title !== movieDetail?.original_title ? (
          <Title variant={"fade-1"}>{movieDetail?.original_title}</Title>
        ) : null}
      </div>
      <div className="flex gap-2">
        <Type>{movieDetail?.original_language.toUpperCase()}</Type>
        <Type>|</Type>
        {movieDetail?.spoken_languages.map((item) => (
          <Type key={item.iso_3166_1}>{item.english_name}</Type>
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
    </div>
  );
};

export default DetailInformation;
