import { useQuery } from '@tanstack/react-query'
import { fetchIssuesByLabel } from '../api/github'

export function useIssues(label) {
  return useQuery({
    queryKey: ['issues', label],
    queryFn: () => fetchIssuesByLabel(label),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  })
}
