import { IoIosStar } from "react-icons/io";
import { Type } from "./ui/typography/type";

type RateProps = {
  avarage: number;
  count: number;
};

const Rate = ({ avarage = 1, count = 1 }: RateProps) => {
  const array = Array.from({ length: Math.floor(avarage) }, () => avarage);

  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-1">
        {array.map((_item, index) => (
          <IoIosStar key={index} className="text-accent" size={24} />
        ))}
      </div>
      <div className="flex items-center gap-1">
        <Type variant={"xl"}>{avarage.toFixed(1)}</Type>

        <Type variant={"xs"}>({count})</Type>
      </div>
    </div>
  );
};

export default Rate;
