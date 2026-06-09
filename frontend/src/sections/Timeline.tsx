import TimelinePlanet from "../components/TimelinePlanet";
import { timeline } from "../data/timeline";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="
      min-h-screen
      py-32
      px-8
      bg-gradient-to-b
      from-black
      via-blue-950/10
      to-black
      "
    >
      <h2
        className="
        text-center
        text-6xl
        font-black
        mb-24
        "
      >
        Journey Through Space
      </h2>
      <div
  className="
  h-1
  bg-gradient-to-r
  from-cyan-500
  via-blue-500
  to-purple-500
  max-w-5xl
  mx-auto
  mb-24
  rounded-full
  "
/>
      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-4
        gap-12
        "
      >
        {timeline.map((item) => (
          <TimelinePlanet
            key={item.year}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}