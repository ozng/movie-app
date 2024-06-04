import { Button } from "@/components/ui/button";
import { Type } from "@/components/ui/typography/type";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import useCast from "../../hooks/useCast";
import PeopleCard from "@/components/cards/PeopleCard/PeopleCard";

const CastList = () => {
  const { handleShowAllCast, filteredMovieCredit, showAllCast } = useCast();
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-2">
        {filteredMovieCredit?.cast.map((item) => (
          <PeopleCard
            key={item.credit_id}
            fadedText={item.character}
            peopleID={item.id}
            resulation="w185"
            title={item.name}
            imageURL={item.profile_path}
          />
        ))}
      </div>
      <Button
        variant={"link"}
        className="space-x-2"
        onClick={handleShowAllCast}
      >
        {showAllCast ? (
          <FaAngleUp className="text-light-paragraph dark:text-dark-paragraph" />
        ) : (
          <FaAngleDown className="text-light-paragraph dark:text-dark-paragraph" />
        )}
        <Type>{showAllCast ? "Hide " : "See all "}cast</Type>
      </Button>
    </div>
  );
};

export default CastList;
