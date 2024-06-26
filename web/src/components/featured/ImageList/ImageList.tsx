import { IMAGE_URL } from "@/constants/tmdb";
import { BackdropSizes } from "@/types/ImageSizes";
import { BackdropType } from "@/types/Media";
import { Button } from "../../ui/button";
import { scrollHandler } from "@/utils/scroll";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { useRef } from "react";
import { Title } from "../../ui/typography/title";
import ImageModal from "../../modals/ImageModal/ImageModal";
import useImageList from "./hooks/useImageList";
import { changeIndexHandler } from "./utils/changeImage";

type ImageListProps = {
  size?: BackdropSizes;
  list: BackdropType[];
  title?: string;
};

const ImageList = ({ size = "w300", list, title }: ImageListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const { setSelectedIndex, selectedIndex, open, setIsOpen } = useImageList();

  return list.length > 0 ? (
    <>
      <ImageModal
        src={list[selectedIndex].file_path}
        type="backdrop"
        size="original"
        setFunc={setIsOpen}
        isOpen={open}
        current={selectedIndex + 1}
        total={list.length}
        next={() => changeIndexHandler("next", setSelectedIndex, list.length)}
        prev={() => changeIndexHandler("prev", setSelectedIndex, list.length)}
      />

      <div className="space-y-4 relative">
        <div className="flex items-center gap-4">
          {title ? <Title variant={"h4"}>{title}</Title> : null}
        </div>
        <div className="overflow-scroll no-scrollbar" ref={listRef}>
          <div className="flex gap-6 w-max py-6 px-4">
            {list.map((item, index) => (
              <div
                key={item.file_path}
                className="relative cursor-pointer group"
                onClick={() => {
                  setSelectedIndex(index);
                  setIsOpen(true);
                }}
              >
                <img
                  src={IMAGE_URL + "/" + size + item.file_path}
                  alt=""
                  className="max-w-72 max-h-60 object-cover"
                />
                <div className="flex opacity-0 group-hover:opacity-100 bg-black/50 duration-300 w-full h-full justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <FaSearchPlus color="white" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md group absolute top-1/2 transform -translate-y-1/2 -left-8 ">
          <Button
            variant={"outline"}
            onClick={() => scrollHandler("left", listRef)}
          >
            <FaAngleLeft size={21} />
          </Button>
        </div>
        <div className="rounded-md group absolute top-1/2 transform -translate-y-1/2 -right-8">
          <Button
            variant={"outline"}
            onClick={() => scrollHandler("right", listRef)}
          >
            <FaAngleRight size={21} />
          </Button>
        </div>
      </div>
    </>
  ) : null;
};

export default ImageList;
