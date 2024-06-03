import ExternalLink from "@/components/ExternalLink";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const Links = () => {
  const { selectedPeople } = useSelector((state: RootState) => state.people);

  return (
    <div className="grid grid-cols-2">
      <ExternalLink
        link={`https://www.imdb.com/name/${selectedPeople?.imdb_id}/`}
        text="IMDB"
      />
      {selectedPeople?.homepage ? (
        <ExternalLink link={selectedPeople.homepage} text="Offical Site" />
      ) : null}
    </div>
  );
};

export default Links;
