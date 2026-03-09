import IssueCard from './IssueCard'
import Pagination from './Pagination'

function IssueList({
  data,
  isLoading,
  error,
  page,
  hasNextPage,
  hasPrevPage,
  onNextPage,
  onPrevPage,
  isFetching,
}) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        <p className="font-semibold">Error loading issues</p>
        <p className="text-sm mt-1">{error.message}</p>
      </div>
    )
  }

  if (!data?.nodes?.length) {
    return (
      <div className="text-center py-12 text-gray-500">
        No issues found
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Found {data.issueCount} issues
        </p>
        <Pagination
          page={page}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
          isLoading={isFetching}
        />
      </div>
      <div className="grid gap-4">
        {data.nodes.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  )
}

export default IssueList
