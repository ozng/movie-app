import HorizontalMovieTVCard from "./cards/HorizontalMovieTVCard";
import { Button } from "./ui/button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useRef } from "react";
import { scrollHandler } from "@/utils/scroll";
import { Title } from "./ui/typography/title";
import { Movie } from "@/types/Movie";

type HorizontalMovieTVListProps = {
  title?: string;
  list?: Movie[] | [];
};

const HorizontalMovieTVList = ({ title, list }: HorizontalMovieTVListProps) => {
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <Title variant={"h2"}>{title}</Title>
        <div className="flex gap-4 ">
          <div className="rounded-md group">
            <Button
              variant={"ghost"}
              onClick={() => scrollHandler("left", listRef)}
            >
              <FaAngleLeft size={21} />
            </Button>
          </div>
          <div className="rounded-md group">
            <Button
              variant={"ghost"}
              onClick={() => scrollHandler("right", listRef)}
            >
              <FaAngleRight size={21} />
            </Button>
          </div>
        </div>
      </div>
      <div className="overflow-scroll no-scrollbar" ref={listRef}>
        <div className="flex gap-6 w-max py-6 px-4">
          {list && list.length > 0
            ? list.map((item) => (
                <HorizontalMovieTVCard key={item.id} movieOrTV={item} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default HorizontalMovieTVList;
