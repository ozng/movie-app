import { IMAGE_URL } from "@/constants/tmdb";
import { RootState } from "@/services/redux/store";
import { ProfileSizes } from "@/types/ImageSizes";
import { useSelector } from "react-redux";

const resolution: ProfileSizes = "h632";
const profileURL = IMAGE_URL + "/" + resolution;

const PeoplePicture = () => {
  const { selectedPeople } = useSelector((state: RootState) => state.people);

  return (
    <div>
      {selectedPeople && selectedPeople.profile_path ? (
        <img src={profileURL + selectedPeople.profile_path} alt="" />
      ) : null}
    </div>
  );
};

export default PeoplePicture;
