import { GraphQLClient, gql } from 'graphql-request'
import { REPOSITORIES } from '../data/repositories'

const GITHUB_API_URL = 'https://api.github.com/graphql'

const client = new GraphQLClient(GITHUB_API_URL, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
})

const ISSUES_QUERY = gql`
  query GetIssues($query: String!, $first: Int!, $after: String) {
    search(query: $query, type: ISSUE, first: $first, after: $after) {
      issueCount
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        ... on Issue {
          id
          title
          number
          url
          createdAt
          author {
            login
            avatarUrl
          }
          labels(first: 5) {
            nodes {
              name
              color
            }
          }
          comments {
            totalCount
          }
          repository {
            nameWithOwner
          }
        }
      }
    }
  }
`

const PAGE_SIZE = 10

export async function fetchIssuesByLabel(label, cursor = null) {
  const repoFilter = REPOSITORIES.map((r) => `repo:${r.name}`).join(' ')
  const labelFilter = label === 'All' ? '' : `label:"${label}"`
  const query = `${repoFilter} is:issue is:open ${labelFilter} sort:updated-desc`

  const data = await client.request(ISSUES_QUERY, {
    query,
    first: PAGE_SIZE,
    after: cursor,
  })

  return data.search
}
