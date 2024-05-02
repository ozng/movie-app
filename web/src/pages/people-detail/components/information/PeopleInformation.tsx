import Name from "./Name";
import BirtdayAndPlace from "./BirtdayAndPlace";
import Biography from "./Biography";

const PeopleInformation = () => {
  return (
    <div className="space-y-6 col-span-3">
      <div>
        <Name />
        <BirtdayAndPlace />
      </div>
      <Biography />
    </div>
  );
};

export default PeopleInformation;
