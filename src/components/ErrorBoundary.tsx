import { Component, ErrorInfo, ReactNode } from 'react'
import { HardDrive, RefreshCw } from 'lucide-react'
import { StorageError } from '../utils/storage'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  private handleRefresh = () => {
    // Clear some storage before refreshing if it was a storage error
    if (this.state.error instanceof StorageError) {
      try {
        localStorage.clear()
      } catch (e) {
        console.warn('Failed to clear storage:', e)
      }
    }
    window.location.reload()
  }

  public render() {
    if (this.state.hasError) {
      const isStorageError = this.state.error instanceof StorageError ||
        (this.state.error?.message || '').includes('FILE_ERROR_NO_SPACE')

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black p-4">
          <div className="cyber-border p-8 rounded-lg max-w-md w-full">
            <div className="flex items-center justify-center mb-6">
              {isStorageError ? (
                <HardDrive className="w-12 h-12 text-emerald-400" />
              ) : (
                <RefreshCw className="w-12 h-12 text-emerald-400" />
              )}
            </div>
            
            <h2 className="text-2xl font-bold text-emerald-400 mb-4 text-center">
              {isStorageError ? 'Storage Space Issue' : 'Something went wrong'}
            </h2>
            
            <p className="text-gray-300 mb-4 text-center">
              {isStorageError ? (
                "Your device is running low on storage space. This might affect the app's functionality."
              ) : (
                this.state.error?.message || 'An unexpected error occurred'
              )}
            </p>

            {isStorageError && (
              <div className="mb-6 p-4 bg-black/30 rounded-lg">
                <h3 className="text-emerald-400 font-semibold mb-2">Recommended actions:</h3>
                <ul className="text-gray-300 space-y-2 list-disc pl-4">
                  <li>Clear your browser cache and temporary files</li>
                  <li>Free up some space on your device</li>
                  <li>Close unnecessary browser tabs and applications</li>
                </ul>
              </div>
            )}

            <div className="flex justify-center">
              <button
                onClick={this.handleRefresh}
                className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
