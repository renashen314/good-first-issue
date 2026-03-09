import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { fetchIssuesByLabel } from '../api/github'

export function useIssues(label) {
  const [page, setPage] = useState(1)
  const [cursors, setCursors] = useState([null]) // cursors[0] = null for page 1

  // Reset pagination when label changes
  useEffect(() => {
    setPage(1)
    setCursors([null])
  }, [label])

  const currentCursor = cursors[page - 1] ?? null

  const query = useQuery({
    queryKey: ['issues', label, page],
    queryFn: () => fetchIssuesByLabel(label, currentCursor),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  })

  const goToNextPage = () => {
    if (query.data?.pageInfo?.hasNextPage) {
      const nextCursor = query.data.pageInfo.endCursor
      setCursors((prev) => {
        const updated = [...prev]
        updated[page] = nextCursor
        return updated
      })
      setPage((p) => p + 1)
    }
  }

  const goToPrevPage = () => {
    if (page > 1) {
      setPage((p) => p - 1)
    }
  }

  return {
    ...query,
    page,
    goToNextPage,
    goToPrevPage,
    hasNextPage: query.data?.pageInfo?.hasNextPage ?? false,
    hasPrevPage: page > 1,
  }
}
