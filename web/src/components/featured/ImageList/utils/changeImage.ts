export type ChangeIndexHandler = (
  type: "next" | "prev",
  setFunc: React.Dispatch<React.SetStateAction<number>>,
  length: number
) => void;

export const changeIndexHandler: ChangeIndexHandler = (
  type,
  setFunc,
  length
) => {
  const payload = type === "next" ? 1 : -1;
  const min = 0;
  const max = length - 1;
  setFunc((prevState) => {
    if (type === "prev" && prevState === min) return 0;
    if (type === "next" && prevState === max) return max;
    return prevState + payload;
  });
};
