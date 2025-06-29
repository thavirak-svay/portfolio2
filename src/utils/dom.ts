// DOM utility functions

/**
 * Check if code is running in browser
 */
export const isBrowser = typeof window !== 'undefined'

/**
 * Scroll to element smoothly
 */
export function scrollToElement(elementId: string): void {
  if (!isBrowser) return
  
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (!isBrowser) return false
  
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('Failed to copy text:', error)
    return false
  }
} 