// Storage utility with enhanced error handling and space checking
export const storage = {
  /**
   * Checks if there's enough storage space available
   * Returns available space in MB
   */
  checkSpace: async (): Promise<number> => {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      try {
        const { quota, usage } = await navigator.storage.estimate()
        const availableSpace = quota ? (quota - (usage || 0)) / 1024 / 1024 : 0
        return availableSpace
      } catch (error) {
        console.warn('Error checking storage space:', error)
        return 0
      }
    }
    return 0
  },

  /**
   * Attempts to write data to storage with space verification
   */
  set: async (key: string, value: any): Promise<boolean> => {
    try {
      // Check if we have enough space (minimum 1MB)
      const availableSpace = await storage.checkSpace()
      if (availableSpace < 1) {
        throw new StorageError('Insufficient storage space')
      }

      const serializedValue = JSON.stringify(value)
      // Roughly estimate size in MB (2 bytes per character)
      const estimatedSize = (serializedValue.length * 2) / 1024 / 1024

      if (estimatedSize > availableSpace) {
        throw new StorageError('Data size exceeds available storage space')
      }

      localStorage.setItem(key, serializedValue)
      return true
    } catch (error) {
      if (error instanceof StorageError) {
        throw error
      }
      if (isQuotaExceededError(error)) {
        throw new StorageError('Storage quota exceeded')
      }
      console.error('Storage error:', error)
      throw error
    }
  },

  get: (key: string): any => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error('Error reading from storage:', error)
      return null
    }
  },

  remove: (key: string): boolean => {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.error('Error removing from storage:', error)
      return false
    }
  },

  clear: (): boolean => {
    try {
      localStorage.clear()
      return true
    } catch (error) {
      console.error('Error clearing storage:', error)
      return false
    }
  }
}

export class StorageError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'StorageError'
  }
}

function isQuotaExceededError(error: any): boolean {
  return (
    error instanceof DOMException &&
    (error.name === 'QuotaExceededError' ||
      error.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
      error.message.includes('FILE_ERROR_NO_SPACE'))
  )
}
