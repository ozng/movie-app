export type ScrollHandler = (
  direction: "left" | "right",
  ref: React.RefObject<HTMLDivElement>
) => void;

export const scrollHandler: ScrollHandler = (direction, ref) => {
  if (direction === "right") {
    ref.current?.scrollBy({ left: 144 * 3, behavior: "smooth" });
  } else {
    ref.current?.scrollBy({ left: -144 * 3, behavior: "smooth" });
  }
};
