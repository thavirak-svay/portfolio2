// API utility functions

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public response?: Response
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

/**
 * Create a fetch wrapper with error handling
 */
export async function fetchWithErrorHandling<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new ApiError(
        response.status,
        `HTTP error! status: ${response.status}`,
        response
      )
    }

    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    throw new ApiError(0, 'Network error or invalid JSON')
  }
}

/**
 * POST request helper
 */
export async function post<T>(
  url: string,
  data: unknown,
  options: RequestInit = {}
): Promise<T> {
  return fetchWithErrorHandling<T>(url, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  })
}

/**
 * GET request helper
 */
export async function get<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  return fetchWithErrorHandling<T>(url, {
    method: 'GET',
    ...options,
  })
} 