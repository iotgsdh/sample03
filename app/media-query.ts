"use client";

import { useEffect, useState } from "react";

export const mediaQuery = {
  pc: "(width >= 1024px)",
};

export function useMediaQuery(query: string) {
  const [matchs, setMatchs] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    function handleChange(mql: MediaQueryList | MediaQueryListEvent) {
      setMatchs(mql.matches);
    }

    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return matchs;
}
