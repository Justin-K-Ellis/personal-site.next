import { useState, useEffect } from "react";
import useGetInitalWidth from "./useGetInitialWidth";

export default function useGetWidthUpdate(): number {
  const initialWidth = useGetInitalWidth();
  const [updatedWidth, setUpdatedWidth] = useState(initialWidth);

  useEffect(() => {
    function updateWidth() {
      const w = window.innerWidth;
      setUpdatedWidth(w);
    }
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return updatedWidth;
}
