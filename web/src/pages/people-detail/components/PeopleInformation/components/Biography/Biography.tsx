import { Type } from "@/components/ui/typography/type";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const Biography = () => {
  const { selectedPeople } = useSelector((state: RootState) => state.people);

  return (
    <div className="bg-faded-1/20 p-4 rounded-sm">
      <Type size={"sm"} className="text-justify">
        {selectedPeople?.biography}
      </Type>
    </div>
  );
};

export default Biography;
