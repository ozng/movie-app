import NoImage from "@/components/NoImage";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Type } from "@/components/ui/typography/type";
import { IMAGE_URL } from "@/constants/tmdb";
import { hideCast, showCast } from "@/services/redux/slices/peopleSlice";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const resulation = "/w185";
const profileURL = IMAGE_URL + resulation;

const Cast = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
                  <div
                    key={item.credit_id}
                    className="flex gap-2 cursor-pointer duration-150 hover:bg-accent/10 rounded-2xl p-2"
                    onClick={() => navigate(`/people/detail/${item.id}`)}
                  >
                    {item.profile_path ? (
                      <img
                        src={profileURL + item.profile_path}
                        alt="actor/actress"
                        className="size-10 object-cover rounded-2xl"
                      />
                    ) : (
                      <NoImage />
                    )}

                    <div className="flex flex-col justify-between">
                      <Type size={"sm"} thickness={"bold"}>
                        {item.name}
                      </Type>
                      <Type size={"xs"} variant={"fade-1"}>
                        {item.known_for_department}
                      </Type>
                    </div>
                  </div>
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
              <div
                key={item.credit_id}
                className="flex gap-2 cursor-pointer duration-150 hover:bg-accent/10 rounded-2xl p-2"
                onClick={() => navigate(`/people/detail/${item.id}`)}
              >
                {item.profile_path ? (
                  <img
                    src={profileURL + item.profile_path}
                    alt="actor/actress"
                    className="size-10 object-cover rounded-2xl"
                  />
                ) : (
                  <NoImage />
                )}

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
            <Type>{showAllCast ? "Hide " : "See all "}cast</Type>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cast;
