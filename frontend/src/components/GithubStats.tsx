export default function GithubStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h3 className="text-2xl font-bold">
          Open Source
        </h3>

        <p className="text-gray-400 mt-2">
          Active GitHub Contributor
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h3 className="text-2xl font-bold">
          Consistent Commits
        </h3>

        <p className="text-gray-400 mt-2">
          Building projects daily
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h3 className="text-2xl font-bold">
          Projects
        </h3>

        <p className="text-gray-400 mt-2">
          AI + Full Stack Development
        </p>
      </div>

    </div>
  );
}