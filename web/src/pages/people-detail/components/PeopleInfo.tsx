import PeopleInformation from "./info/PeopleInformation";
import PeoplePicture from "./info/PeoplePicture";

const PeopleInfo = () => {
  return (
    <div className="grid grid-cols-4 gap-12">
      <PeoplePicture />
      <PeopleInformation />
    </div>
  );
};

export default PeopleInfo;
