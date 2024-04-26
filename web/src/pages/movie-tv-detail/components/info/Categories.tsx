import { Type } from "@/components/ui/typography/type";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const Categories = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return (
    <div className="flex gap-4">
      {movieDetail?.genres.map((item) => (
        <Type key={item.id} variant={"fade-2"} size={"sm"}>
          {item.name}
        </Type>
      ))}
    </div>
  );
};

export default Categories;
