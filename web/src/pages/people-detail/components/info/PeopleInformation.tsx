import { Title } from "@/components/ui/typography/title";
import { Type } from "@/components/ui/typography/type";
import { RootState } from "@/services/redux/store";
import moment from "moment";
import { useSelector } from "react-redux";

const PeopleInformation = () => {
  const { selectedPeople } = useSelector((state: RootState) => state.people);

  return (
    <div className="col-span-3">
      {selectedPeople ? (
        <div className="space-y-6">
          <div>
            <Title size={"2xl"} thickness={"bold"}>
              {selectedPeople.name}
            </Title>
            <div className="flex flex-col">
              <Type variant={"fade-1"}>
                {moment(selectedPeople.birthday).format("D MMMM YYYY")}
              </Type>
              {selectedPeople.deathday ? (
                <Type variant={"fade-1"}>
                  {moment(selectedPeople.deathday).format("D MMMM YYYY")}
                </Type>
              ) : null}
            </div>
          </div>
          <div>
            <Type size={"sm"} className="text-justify">
              {selectedPeople.biography}
            </Type>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PeopleInformation;
