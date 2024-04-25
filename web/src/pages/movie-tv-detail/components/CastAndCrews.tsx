import { Type } from "@/components/ui/typography/type";
import { IMAGE_URL } from "@/constants/tmdb";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useSelector } from "react-redux";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { hideCast, showCast } from "@/services/redux/slices/peopleSlice";

const resulation = "/w185";
const profileURL = IMAGE_URL + resulation;

const CastAndCrews = () => {
  const dispatch = useAppDispatch();
  const { filteredMovieCredit, showAllCast } = useSelector(
    (state: RootState) => state.people
  );

  const director = filteredMovieCredit?.crew.find(
    (item) => item.known_for_department === "Directing"
  );

  const handleShowAllCast = () => {
    showAllCast ? dispatch(hideCast()) : dispatch(showCast());
  };

  return (
    <div className="flex flex-col gap-4">
      <Type thickness={"bold"}>Cast</Type>
      <div className="flex flex-col gap-6 mt-6">
        <div>
          {director ? (
            <div className="flex gap-2">
              <img
                src={profileURL + director.profile_path}
                alt="actor/actress"
                className="size-10 object-cover rounded-2xl"
              />
              <div className="flex flex-col justify-between">
                <Type size={"sm"} thickness={"bold"}>
                  {director.name}
                </Type>
                <Type size={"xs"} variant={"fade-1"}>
                  {director.job}
                </Type>
              </div>
            </div>
          ) : null}
        </div>
        <Separator />
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-8">
            {filteredMovieCredit?.cast.map((item) => (
              <div key={item.id} className="flex gap-2">
                <img
                  src={profileURL + item.profile_path}
                  alt="actor/actress"
                  className="size-10 object-cover rounded-2xl"
                />
                <div className="flex flex-col justify-between">
                  <Type size={"sm"} thickness={"bold"}>
                    {item.name}
                  </Type>
                  <Type size={"xs"} variant={"fade-1"}>
                    {item.character}
                  </Type>
                </div>
              </div>
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
            <Type>See all cast</Type>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CastAndCrews;
