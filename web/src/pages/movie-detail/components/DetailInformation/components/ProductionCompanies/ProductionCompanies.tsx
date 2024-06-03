import { Type } from "@/components/ui/typography/type";
import { logoSizes } from "@/constants/imageSizes";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const ProductionCompanies = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return (
    <div className="grid grid-cols-3">
      {movieDetail?.production_companies?.map((item) => (
        <div key={item.id} className="size-20 flex items-center justify-center">
          {item.logo_path ? (
            <img src={logoSizes.w185 + item.logo_path} alt="company logo" />
          ) : (
            <Type size={"sm"} className="text-center">
              {item.name}
            </Type>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductionCompanies;
