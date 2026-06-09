import {
  usePortfolio,
} from "../context/PortfolioContext";

export default function RecruiterToggle() {

  const {
    recruiterMode,
    setRecruiterMode,
  } = usePortfolio();

  return (
    <button
      onClick={() =>
        setRecruiterMode(
          !recruiterMode
        )
      }
      className="
      px-4
      py-2
      rounded-xl
      bg-cyan-500
      text-black
      font-bold
      "
    >
      {recruiterMode
        ? "🚀 Space Mode"
        : "📄 Recruiter Mode"}
    </button>
  );
}