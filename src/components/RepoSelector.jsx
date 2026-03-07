import { REPOSITORIES, CATEGORIES } from '../data/repositories'

function RepoSelector({ selectedRepo, onSelectRepo }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Repository
      </label>
      <select
        value={selectedRepo}
        onChange={(e) => onSelectRepo(e.target.value)}
        className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {CATEGORIES.map((category) => (
          <optgroup key={category} label={category}>
            {REPOSITORIES.filter((repo) => repo.category === category).map(
              (repo) => (
                <option key={repo.name} value={repo.name}>
                  {repo.name}
                </option>
              )
            )}
          </optgroup>
        ))}
      </select>
    </div>
  )
}

export default RepoSelector
