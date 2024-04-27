import { Type } from "@/components/ui/typography/type";
import { IMAGE_URL } from "@/constants/tmdb";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const resulation = "/w185";
const profileURL = IMAGE_URL + resulation;

const ProductionCompanies = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return (
    <div className="grid grid-cols-6 gap-6">
      {movieDetail?.production_companies?.map((item) => (
        <div key={item.id} className="size-20 flex items-center justify-center">
          {item.logo_path ? (
            <img src={profileURL + item.logo_path} alt="company logo" />
          ) : (
            <Type size={"sm"} className="text-center" thickness={"semibold"}>
              {item.name}
            </Type>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductionCompanies;
