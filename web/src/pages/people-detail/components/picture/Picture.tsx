import { IMAGE_URL } from "@/constants/tmdb";
import { RootState } from "@/services/redux/store";
import { type ProfileSizes } from "@/types/ImageSizes";
import { useSelector } from "react-redux";

const resolution: ProfileSizes = "h632";
const profileURL = IMAGE_URL + "/" + resolution;

const Picture = () => {
  const { selectedPeople } = useSelector((state: RootState) => state.people);

  return <img src={profileURL + selectedPeople?.profile_path} alt="profile" />;
};

export default Picture;
