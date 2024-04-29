import { IMAGE_URL } from "@/constants/tmdb";
import { BackdropSizes } from "@/types/ImageSizes";
import { BackdropType } from "@/types/Media";
import { Button } from "./ui/button";
import { scrollHandler } from "@/utils/scroll";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useRef } from "react";
import { Type } from "./ui/typography/type";

type ImageListProps = {
  size?: BackdropSizes;
  list: BackdropType[];
  title?: string;
};

const ImageList = ({ size = "w300", list, title }: ImageListProps) => {
  const listRef = useRef<HTMLDivElement>(null);

  return list.length > 0 ? (
    <div className="space-y-4 relative ">
      <div className="flex items-center gap-4">
        {title ? <Type thickness={"bold"}>{title}</Type> : null}
      </div>
      <div className="overflow-scroll no-scrollbar" ref={listRef}>
        <div className="flex gap-6 w-max py-6 px-4">
          {list.map((item) => (
            <img
              key={item.file_path}
              src={IMAGE_URL + "/" + size + item.file_path}
              alt=""
              className="w-72"
            />
          ))}
        </div>
      </div>
      <div className="rounded-md group absolute top-1/2 transform -translate-y-1/2 -translate-x-8">
        <Button
          variant={"outline"}
          onClick={() => scrollHandler("left", listRef)}
        >
          <FaAngleLeft size={21} />
        </Button>
      </div>
      <div className="rounded-md group absolute top-1/2 transform -translate-y-1/2 right-0 translate-x-8">
        <Button
          variant={"outline"}
          onClick={() => scrollHandler("right", listRef)}
        >
          <FaAngleRight size={21} />
        </Button>
      </div>
    </div>
  ) : null;
};

export default ImageList;
