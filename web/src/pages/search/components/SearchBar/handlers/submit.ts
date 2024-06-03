import { SetURLSearchParams } from "react-router-dom";

type OnSubmitHandlerType = (
  e: React.FormEvent<HTMLFormElement>,
  ref: React.RefObject<HTMLInputElement>,
  setSearchParams: SetURLSearchParams
) => void;

export const onSubmitHandler: OnSubmitHandlerType = (
  e,
  ref,
  setSearchParams
) => {
  e.preventDefault();
  if (ref?.current?.value) {
    setSearchParams((prev) => ({
      ...prev,
      movie: ref.current?.value,
      page: 1,
    }));
  }
};
