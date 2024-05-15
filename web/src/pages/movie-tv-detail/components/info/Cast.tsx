import NoImage from "@/components/NoImage";
import PeopleCard from "@/components/cards/PeopleCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Type } from "@/components/ui/typography/type";
import { hideCast, showCast } from "@/services/redux/slices/peopleSlice";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Cast = () => {
  const dispatch = useAppDispatch();
  const { filteredMovieCredit, showAllCast } = useSelector(
    (state: RootState) => state.people
  );

  const director = filteredMovieCredit?.crew.filter(
    (item) => item.job === "Director"
  );

  const handleShowAllCast = () => {
    showAllCast ? dispatch(hideCast()) : dispatch(showCast());
  };

  return (
    <div className="flex flex-col gap-4">
      <Type thickness={"bold"}>Cast</Type>
      <div className="flex flex-col gap-4">
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
        <Separator />
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
      </div>
    </div>
  );
};

export default Cast;
