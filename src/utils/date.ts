// Date utility functions

/**
 * Format date to readable string
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {}
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  
  return dateObj.toLocaleDateString('en-US', { ...defaultOptions, ...options })
}

/**
 * Get relative time (e.g., "2 days ago")
 */
export function getRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffInMs = now.getTime() - dateObj.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  
  if (diffInDays === 0) return 'Today'
  if (diffInDays === 1) return 'Yesterday'
  if (diffInDays < 30) return `${diffInDays} days ago`
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`
  return `${Math.floor(diffInDays / 365)} years ago`
}

/**
 * Check if date is in the past
 */
export function isPastDate(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj < new Date()
}

/**
 * Get duration between dates
 */
export function getDuration(startDate: Date | string, endDate?: Date | string): string {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate
  const end = endDate 
    ? (typeof endDate === 'string' ? new Date(endDate) : endDate)
    : new Date()
  
  const diffInMs = end.getTime() - start.getTime()
  const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30))
  const years = Math.floor(diffInMonths / 12)
  const months = diffInMonths % 12
  
  if (years > 0) {
    return months > 0 ? `${years} yr ${months} mo` : `${years} yr`
  }
  return months > 0 ? `${months} mo` : '< 1 mo'
} 