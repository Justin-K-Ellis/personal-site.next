import { useState, useEffect } from "react";

export default function useGetInitalWidth(): number {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    function getWidth() {
      const w = window.innerWidth;
      setWindowWidth(w);
    }
    getWidth();
  }, []);

  return windowWidth;
}
