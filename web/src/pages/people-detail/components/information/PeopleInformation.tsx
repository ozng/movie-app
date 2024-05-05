import Name from "./Name";
import BirtdayAndPlace from "./BirtdayAndPlace";
import Biography from "./Biography";
import PeopleMovies from "../PeopleMovies";
import Images from "./Images";

const PeopleInformation = () => {
  return (
    <div className="space-y-6 col-span-3">
      <div>
        <Name />
        <BirtdayAndPlace />
      </div>
      <Biography />
      <Images />
      <PeopleMovies />
    </div>
  );
};

export default PeopleInformation;
