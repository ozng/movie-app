import PeopleMovies from "../PeopleMovies";
import Biography from "./components/Biography/Biography";
import BirtdayAndPlace from "./components/BirtdayAndPlace/BirtdayAndPlace";
import Images from "./components/Images/Images";
import Name from "./components/Name/Name";

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
