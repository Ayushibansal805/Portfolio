import { useEffect, useState } from "react";

export default function Loader({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 500);

          return 100;
        }

        return prev + 2;
      });
    }, 50);

    return () =>
      clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className="
      fixed
      inset-0
      bg-black
      flex
      flex-col
      justify-center
      items-center
      z-[99999]
      "
    >
      <h1
        className="
        text-cyan-400
        text-4xl
        font-bold
        mb-8
        "
      >
        INITIALIZING AI SYSTEM
      </h1>

      <div
        className="
        w-80
        h-2
        bg-zinc-800
        rounded-full
        overflow-hidden
        "
      >
        <div
          className="
          h-full
          bg-cyan-400
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-6 text-gray-400">
        {progress}%
      </p>
    </div>
  );
}