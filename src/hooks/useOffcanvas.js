import { useState } from "react";

const useOffcanvas = () => {
  const [isShown, setIsShown] = useState(false);

  const close = () => {
    console.log("close cart");
    setIsShown(false);
  };

  const show = () => {
    console.log("show cart");
    setIsShown(true);
  };

  return { isShown, show, close };
};

export default useOffcanvas;
