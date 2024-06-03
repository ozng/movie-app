import { profilePathSizes } from "@/constants/imageSizes";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const Picture = () => {
  const { selectedPeople } = useSelector((state: RootState) => state.people);

  return (
    <img
      src={profilePathSizes.h632 + selectedPeople?.profile_path}
      alt="profile"
    />
  );
};

export default Picture;
