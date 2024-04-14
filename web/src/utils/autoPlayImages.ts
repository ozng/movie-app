type AutoPlay = (
  direction: "forward" | "back",
  maxSize: number,
  current: number
) => number;

export const autoPlay: AutoPlay = (direction, maxSize, current) => {
  const gap = direction === "forward" ? 1 : -1;
  const minimum = 0;

  if (direction === "forward" && maxSize === current) return minimum;
  if (direction === "back" && current === minimum) return maxSize;
  return current + gap;
};
