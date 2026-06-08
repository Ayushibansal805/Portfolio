import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] =
    useState(0);

  useEffect(() => {
    const update = () => {
      const current =
        window.scrollY;

      const height =
        document.body.scrollHeight -
        window.innerHeight;

      setScroll(
        (current / height) * 100
      );
    };

    window.addEventListener(
      "scroll",
      update
    );

    return () =>
      window.removeEventListener(
        "scroll",
        update
      );
  }, []);

  return (
    <div
      className="
      fixed
      top-0
      left-0
      h-1
      bg-cyan-400
      z-[99999]
      "
      style={{
        width: `${scroll}%`,
      }}
    />
  );
}