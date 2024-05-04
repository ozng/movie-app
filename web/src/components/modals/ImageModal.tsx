import { IMAGE_URL } from "@/constants/tmdb";
import {
  type BackdropSizes,
  type LogoSizes,
  type PosterSizes,
} from "@/types/ImageSizes";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "../ui/button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { ChangeIndexHandler } from "../ImageList";
import { Type } from "../ui/typography/type";

type ImageModalProps = {
  src: string | null;
  setFunc: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  changeIndex: ChangeIndexHandler;
  total: number;
  current: number;
} & (
  | {
      type?: "backdrop";
      size?: BackdropSizes;
    }
  | {
      type?: "poster";
      size?: PosterSizes;
    }
  | {
      type?: "logo";
      size?: LogoSizes;
    }
);

const ImageModal = ({
  size,
  src,
  type = "backdrop",
  isOpen,
  setFunc,
  changeIndex,
  current,
  total,
}: ImageModalProps) => {
  return (
    <div
      className={
        isOpen
          ? "opacity-100 h-screen w-full fixed top-0 left-0 duration-300 z-50 bg-transparent"
          : "hidden opacity-0 w-0 h-0  duration-300"
      }
    >
      <div className="relative w-full h-full flex justify-center items-center backdrop-blur-xl bg-transparent">
        <img
          src={IMAGE_URL + "/" + size + src}
          alt={type}
          className="w-[90%] h-[90%] object-contain"
        />
        <div
          className="absolute right-5 top-5 bg-black/60 p-2 rounded-full cursor-pointer hover:bg-black/50 duration-200"
          onClick={() => setFunc(false)}
        >
          <MdOutlineClose size={32} color="white" />
        </div>
        <div className="rounded-md group absolute top-1/2 transform -translate-y-1/2 left-10">
          <Button variant={"outline"} onClick={() => changeIndex("prev")}>
            <FaAngleLeft size={21} />
          </Button>
        </div>
        <div className="rounded-md group absolute top-1/2 transform -translate-y-1/2 right-10">
          <Button variant={"outline"} onClick={() => changeIndex("next")}>
            <FaAngleRight size={21} />
          </Button>
        </div>
        <div className=" absolute left-1/2 transform -translate-x-1/2 bottom-2 bg-light-title dark:bg-dark-title py-2 px-6 rounded-md">
          <Type variant={"light"}>
            {current}/{total}
          </Type>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
