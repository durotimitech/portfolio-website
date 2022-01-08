import React, { useEffect, useMemo, useState } from "react";

const useElementInView = (targetElement: any, threshold: number) => {
  const [elementInView, setElementInView] = useState(false);

  const observerCallBackFn = (entries: any) => {
    const [entry] = entries;

    setElementInView(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      threshold: threshold,
      //   rootMargin: "0px",
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallBackFn, options);
    const currentTarget = targetElement.current;

    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetElement, options]);

  return { elementInView };
};

export default useElementInView;
