import { useEffect } from "react";
import PeopleInformation from "./information/PeopleInformation";
import PeoplePicture from "./picture/PeoplePicture";
import { useSelector } from "react-redux";
import { RootState } from "@/services/redux/store";

const PeopleInfo = () => {
  const { selectedPeople } = useSelector((state: RootState) => state.people);

  useEffect(() => {
    if (selectedPeople?.name) {
      document.title = selectedPeople.name;
    }

    return () => {
      document.title = "RMTV";
    };
  }, [selectedPeople]);

  return (
    <div className="grid grid-cols-4 gap-12">
      {selectedPeople ? (
        <>
          <PeoplePicture />
          <PeopleInformation />
        </>
      ) : null}
    </div>
  );
};

export default PeopleInfo;
