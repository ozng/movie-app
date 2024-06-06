export type ScrollHandler = (
  direction: "left" | "right",
  ref: React.RefObject<HTMLDivElement>
) => void;

export const scrollHandler: ScrollHandler = (direction, ref) => {
  const pixel = 144;

  if (direction === "right") {
    ref.current?.scrollBy({
      left: ref.current.offsetWidth - pixel,
      behavior: "smooth",
    });
  } else {
    ref.current?.scrollBy({
      left: -ref.current.offsetWidth - pixel,
      behavior: "smooth",
    });
  }
};
