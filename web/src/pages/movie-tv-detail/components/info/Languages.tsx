import { Type } from "@/components/ui/typography/type";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const Languages = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return (
    <div className="flex gap-2">
      <Type>{movieDetail?.original_language.toUpperCase()}</Type>
      <Type>|</Type>
      {movieDetail?.spoken_languages.map((item, index) => (
        <Type key={index}>{item.english_name}</Type>
      ))}
    </div>
  );
};

export default Languages;
