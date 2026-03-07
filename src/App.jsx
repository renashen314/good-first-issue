import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LabelFilter from './components/LabelFilter'
import IssueList from './components/IssueList'
import { useIssues } from './hooks/useIssues'
import { LABELS } from './data/labels'

const queryClient = new QueryClient()

function AppContent() {
  const [selectedLabel, setSelectedLabel] = useState(LABELS[0].name)
  const { data, isLoading, isFetching, error, refetch } = useIssues(selectedLabel)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-800">
              GitHub Issue Finder
            </h1>
            <button
              onClick={() => refetch()}
              disabled={isFetching}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {isFetching ? (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              )}
              Refresh
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Find beginner-friendly issues in JavaScript & TypeScript projects
          </p>
        </header>

        <main>
          <LabelFilter
            selectedLabel={selectedLabel}
            onSelectLabel={setSelectedLabel}
          />
          <IssueList data={data} isLoading={isLoading} error={error} />
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}

export default App
