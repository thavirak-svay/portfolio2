// API-related types and interfaces

export interface ApiRequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  headers?: Record<string, string>
  params?: Record<string, unknown>
  timeout?: number
}

export interface ApiEndpoint {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  requiresAuth?: boolean
}

export interface ContactFormSubmission {
  name: string
  email: string
  subject?: string
  message: string
  timestamp: Date
}

export interface SendContactFormRequest {
  name: string
  email: string
  subject?: string
  message: string
}

export interface SendContactFormResponse {
  success: boolean
  message: string
  id?: string
} 