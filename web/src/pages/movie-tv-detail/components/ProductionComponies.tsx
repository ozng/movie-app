import { Type } from "@/components/ui/typography/type";
import { IMAGE_URL } from "@/constants/tmdb";
import { MovieDetail } from "@/models/Movie";

type ProductionComponiesProps = {
  componies?: typeof MovieDetail.prototype.production_companies;
};

const resulation = "/w185";
const profileURL = IMAGE_URL + resulation;

const ProductionComponies = ({ componies }: ProductionComponiesProps) => {
  return (
    <div className="grid grid-cols-6 gap-6">
      {componies?.map((item) => (
        <div className="size-20 flex items-center justify-center">
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

export default ProductionComponies;
