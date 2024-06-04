import { useState } from "react";

const useImageList = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return {
    open,
    setIsOpen,
    selectedIndex,
    setSelectedIndex,
  };
};

export default useImageList;
