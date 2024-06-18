import { useEffect, useRef } from "react";

export const useClickOutSide = (callback: () => void) => {
  const ref = useRef<HTMLElement>(null);

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
  }, [callback]);
};
