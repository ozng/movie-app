import AdultContentWarning from "@/components/AdultContentWarning";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const AdultWarning = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return movieDetail?.adult ? <AdultContentWarning /> : null;
};

export default AdultWarning;
