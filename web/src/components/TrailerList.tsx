import { VideosType } from "@/types/Media";
import { useState } from "react";
import { Button } from "./ui/button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

type TrailerListProps = {
  videos: VideosType;
};

const TrailerList = ({ videos }: TrailerListProps) => {
  const [selectedTrailer, setSelectedTrailer] = useState(0);

  type ChangeTrailerHandlerType = (type: "next" | "prev") => void;
  const changeTrailerHandler: ChangeTrailerHandlerType = (type) => {
    const payload = type === "next" ? 1 : -1;
    const min = 0;
    const max = videos.length - 1;

    setSelectedTrailer((prevState) => {
      if (type === "prev" && prevState === min) return min;
      if (type === "next" && prevState === max) return max;
      return prevState + payload;
    });
  };

  return (
    <div>
      <div className="space-y-4">
        <div className="flex items-center justify-evenly">
          <Button
            variant={"outline"}
            onClick={() => changeTrailerHandler("prev")}
          >
            <FaAngleLeft size={21} />
          </Button>
          <iframe
            src={`https://www.youtube.com/embed/${videos[selectedTrailer].key}`}
            className="w-[70%] h-[30rem]"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <Button
            variant={"outline"}
            onClick={() => changeTrailerHandler("next")}
          >
            <FaAngleRight size={21} />
          </Button>
        </div>
        <div className="flex gap-4 justify-center">
          {videos.map((_item, index) => (
            <div
              className={`h-2 w-2 ${
                index === selectedTrailer
                  ? "bg-light-title dark:bg-dark-title scale-125"
                  : "bg-transparent"
              } border border-light-title dark:bg-dark-title rounded-full duration-300 cursor-pointer`}
              onClick={() => setSelectedTrailer(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrailerList;
