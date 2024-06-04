import { ProfileSizes } from "@/types/ImageSizes";
import { IMAGE_URL } from "@/constants/tmdb";
import { Link } from "react-router-dom";
import NoImage from "@/components/featured/NoImage/NoImage";
import { Type } from "@/components/ui/typography/type";

type PeopleCardProps = {
  title: string;
  fadedText: string;
  peopleID: string | number;
  resulation: ProfileSizes;
  imageURL?: string;
};

const PeopleCard = ({
  fadedText,
  title,
  peopleID,
  imageURL,
  resulation = "w45",
}: PeopleCardProps) => {
  return (
    <Link
      className="flex gap-2 cursor-pointer duration-150 hover:bg-accent/10 rounded-2xl p-2"
      to={`/people/detail/${peopleID}`}
    >
      {imageURL ? (
        <img
          src={IMAGE_URL + "/" + resulation + imageURL}
          alt="actor/actress"
          className="size-10 object-cover rounded-2xl"
        />
      ) : (
        <NoImage />
      )}

      <div className="flex flex-col justify-between">
        <Type>{title}</Type>
        <Type variant={"xs"} textColor={"fade-1"}>
          {fadedText}
        </Type>
      </div>
    </Link>
  );
};

export default PeopleCard;
