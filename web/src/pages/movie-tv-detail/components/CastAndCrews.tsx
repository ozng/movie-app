import { Type } from "@/components/ui/typography/type";
import { IMAGE_URL } from "@/constants/tmdb";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";
import { Separator } from "@/components/ui/separator";

const resulation = "/w185";
const profileURL = IMAGE_URL + resulation;

const CastAndCrews = () => {
  const { selectedMovieCredit } = useSelector(
    (state: RootState) => state.people
  );

  const director = selectedMovieCredit?.crew.find(
    (item) => item.known_for_department === "Directing"
  );
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
        <div className="grid grid-cols-4 gap-8">
          {selectedMovieCredit?.cast.slice(0, 8).map((item) => (
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
      </div>
    </div>
  );
};

export default CastAndCrews;
