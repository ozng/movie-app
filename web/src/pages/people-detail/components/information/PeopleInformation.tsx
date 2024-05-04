import Name from "./Name";
import BirtdayAndPlace from "./BirtdayAndPlace";
import Biography from "./Biography";
import PeopleMovies from "../PeopleMovies";

const PeopleInformation = () => {
  return (
    <div className="space-y-6 col-span-3">
      <div>
        <Name />
        <BirtdayAndPlace />
      </div>
      <Biography />
      <PeopleMovies />
    </div>
  );
};

export default PeopleInformation;
