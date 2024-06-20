import { RefObject, useEffect } from "react";

export const useClickOutSide = (callback: () => void, ref: RefObject<HTMLElement>) => {

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Element)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);
    document.addEventListener("touchend", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
      document.removeEventListener("touchend", handleClickOutSide);
    };
  }, [callback, ref]);
};
