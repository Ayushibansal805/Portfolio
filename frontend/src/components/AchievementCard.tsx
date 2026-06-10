type Achievement = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  achievement: Achievement;
};

export default function AchievementCard({
  achievement,
}: Props) {
  return (
    <div
      className="
      max-w-3xl
      mx-auto
      bg-black/70
      backdrop-blur-xl
      border
      border-cyan-500/20
      rounded-3xl
      p-16
      text-center
      hover:shadow-[0_0_80px_#06b6d4]
      transition-all
      duration-500
      "
    >
      <div
        className="
        w-24
        h-24
        mx-auto
        rounded-full
        border
        border-cyan-500/30
        flex
        items-center
        justify-center
        text-5xl
        mb-8
        "
      >
        {achievement.icon}
      </div>

      <h3
        className="
        text-5xl
        font-black
        mb-8
        text-white
        "
      >
        {achievement.title}
      </h3>

      <p
        className="
        text-gray-300
        text-xl
        leading-relaxed
        "
      >
        {achievement.description}
      </p>
    </div>
  );
}