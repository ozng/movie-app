import NoImage from "@/components/featured/NoImage/NoImage";
import PeopleCard from "@/components/cards/PeopleCard/PeopleCard";
import { Crew } from "@/types/People";

type DirectorListProps = {
  director?: Crew[];
};

const DirectorList = ({ director }: DirectorListProps) => {
  return (
    <div>
      {director ? (
        <div className="grid grid-cols-4">
          {director.length > 0 ? (
            director.map((item) => (
              <PeopleCard
                key={item.id}
                fadedText={item.known_for_department}
                peopleID={item.id}
                resulation="w185"
                title={item.name}
                imageURL={item.profile_path}
              />
            ))
          ) : (
            <NoImage />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default DirectorList;
