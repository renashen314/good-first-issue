function Pagination({
  page,
  hasNextPage,
  hasPrevPage,
  onNextPage,
  onPrevPage,
  isLoading,
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onPrevPage}
        disabled={!hasPrevPage || isLoading}
        className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Prev
      </button>
      <span className="text-sm text-gray-600">Page {page}</span>
      <button
        onClick={onNextPage}
        disabled={!hasNextPage || isLoading}
        className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
