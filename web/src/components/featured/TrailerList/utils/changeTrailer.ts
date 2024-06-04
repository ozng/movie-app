type ChangeTrailerHandlerType = (
  type: "next" | "prev",
  length: number,
  setFunc: React.Dispatch<React.SetStateAction<number>>
) => void;

export const changeTrailerHandler: ChangeTrailerHandlerType = (
  type,
  length,
  setFunc
) => {
  const payload = type === "next" ? 1 : -1;
  const min = 0;
  const max = length - 1;

  setFunc((prevState) => {
    if (type === "prev" && prevState === min) return min;
    if (type === "next" && prevState === max) return max;
    return prevState + payload;
  });
};
