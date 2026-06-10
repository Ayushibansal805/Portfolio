import { destinations }
from "../data/destinations";

export default function SpaceNavigator() {
  return (
    <div
      className="
      fixed
      right-6
      top-1/2
      -translate-y-1/2
      z-50
      hidden
      xl:flex
      flex-col
      gap-4
      "
    >
      {destinations.map(
        (destination) => (
          <a
            key={destination.name}
            href={destination.target}
            className="
            group
            relative
            w-14
            h-14
            rounded-full
            bg-black/70
            border
            border-cyan-500/30
            flex
            items-center
            justify-center
            text-xl
            backdrop-blur-xl
            hover:scale-110
            transition
            "
          >
            {destination.icon}

            <span
              className="
              absolute
              right-16
              whitespace-nowrap
              opacity-0
              group-hover:opacity-100
              transition
              bg-black
              px-3
              py-1
              rounded-lg
              border
              border-cyan-500/20
              "
            >
              {destination.name}
            </span>
          </a>
        )
      )}
    </div>
  );
}