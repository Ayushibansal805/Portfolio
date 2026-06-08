import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor =
      document.getElementById("cursor");

    const move = (
      e: MouseEvent
    ) => {
      if (cursor) {
        cursor.style.left =
          e.clientX + "px";

        cursor.style.top =
          e.clientY + "px";
      }
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      id="cursor"
      className="
      fixed
      w-6
      h-6
      rounded-full
      border
      border-cyan-400
      pointer-events-none
      z-[9999]
      -translate-x-1/2
      -translate-y-1/2
      "
    />
  );
}