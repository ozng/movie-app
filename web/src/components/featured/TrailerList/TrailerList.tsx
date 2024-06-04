import { Button } from "@/components/ui/button";
import { VideosType } from "@/types/Media";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { changeTrailerHandler } from "./utils/changeTrailer";

type TrailerListProps = {
  videos: VideosType;
};

const TrailerList = ({ videos }: TrailerListProps) => {
  const [selectedTrailer, setSelectedTrailer] = useState(0);

  return (
    <div>
      <div className="space-y-4">
        <div className="flex">
          <iframe
            src={`https://www.youtube.com/embed/${videos[selectedTrailer]?.key}`}
            className="w-full h-[30rem]"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Button
            variant={"outline"}
            onClick={() =>
              changeTrailerHandler("prev", videos.length, setSelectedTrailer)
            }
          >
            <FaAngleLeft size={21} />
          </Button>
          {videos && videos.length > 0
            ? videos.map((item, index) => (
                <div
                  key={item.id}
                  className={`h-2 w-2 ${
                    index === selectedTrailer
                      ? "bg-light-title dark:bg-dark-title scale-125"
                      : "bg-transparent"
                  } border border-light-title dark:bg-dark-title rounded-full duration-300 cursor-pointer`}
                  onClick={() => setSelectedTrailer(index)}
                />
              ))
            : null}
          <Button
            variant={"outline"}
            onClick={() =>
              changeTrailerHandler("next", videos.length, setSelectedTrailer)
            }
          >
            <FaAngleRight size={21} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrailerList;
