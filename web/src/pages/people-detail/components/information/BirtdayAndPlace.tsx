import { Type } from "@/components/ui/typography/type";
import { RootState } from "@/services/redux/store";
import moment from "moment";
import { useSelector } from "react-redux";

const BirtdayAndPlace = () => {
  const { selectedPeople } = useSelector((state: RootState) => state.people);

  return (
    <div className="flex flex-col">
      <Type variant={"fade-2"}>{selectedPeople?.place_of_birth}</Type>
      <Type variant={"fade-1"}>
        {moment(selectedPeople?.birthday).format("D MMMM YYYY")}
      </Type>
      {selectedPeople?.deathday ? (
        <Type variant={"fade-1"}>
          {moment(selectedPeople.deathday).format("D MMMM YYYY")}
        </Type>
      ) : null}
    </div>
  );
};

export default BirtdayAndPlace;
