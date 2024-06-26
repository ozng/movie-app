import { Title } from "@/components/ui/typography/title";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const Name = () => {
  const { selectedPeople } = useSelector((state: RootState) => state.people);

  return <Title variant={"h2"}>{selectedPeople?.name}</Title>;
};

export default Name;
