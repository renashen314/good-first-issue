function IssueCard({ issue }) {
  const formattedDate = new Date(issue.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <a
      href={issue.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-200"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
          {issue.title}
        </h3>
        <span className="text-sm text-gray-500 whitespace-nowrap">
          #{issue.number}
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-1">
        {issue.repository.nameWithOwner}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {issue.labels.nodes.map((label) => (
          <span
            key={label.name}
            className="px-2 py-1 text-xs font-medium rounded-full"
            style={{
              backgroundColor: `#${label.color}20`,
              color: `#${label.color}`,
              border: `1px solid #${label.color}`,
            }}
          >
            {label.name}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
        {issue.author && (
          <div className="flex items-center gap-2">
            <img
              src={issue.author.avatarUrl}
              alt={issue.author.login}
              className="w-5 h-5 rounded-full"
            />
            <span>{issue.author.login}</span>
          </div>
        )}
        <span>{formattedDate}</span>
        <span>{issue.comments.totalCount} comments</span>
      </div>
    </a>
  )
}

export default IssueCard
