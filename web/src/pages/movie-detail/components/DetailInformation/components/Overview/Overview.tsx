import { Type } from "@/components/ui/typography/type";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const Overview = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return (
    <div className="bg-faded-1/20 p-4 rounded-sm">
      <Type variant={"overview"}>{movieDetail?.overview}</Type>
    </div>
  );
};

export default Overview;
