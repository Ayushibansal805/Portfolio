export default function Stats() {
  const stats = [
  {
    value: "3",
    label: "Flagship Projects",
  },

  {
    value: "AI",
    label: "Core Domain",
  },

  {
    value: "2027",
    label: "GSoC Target",
  },

  {
    value: "OSS",
    label: "Open Source Journey",
  },
];

  return (
    <section className="py-24">

      <div
 className="
 max-w-7xl
 mx-auto
 grid
 md:grid-cols-4
 gap-8
 px-8
 "
>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
            text-center
            "
          >
            <h2
              className="
              text-5xl
              font-bold
              text-cyan-400
              "
            >
              {stat.value}
            </h2>

            <p>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}