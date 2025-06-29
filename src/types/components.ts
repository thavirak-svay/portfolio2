import { ReactNode } from 'react'

// Component props and related types

export interface BaseComponentProps {
  className?: string
  children?: ReactNode
}

export interface LayoutProps extends BaseComponentProps {
  metadata?: {
    title?: string
    description?: string
  }
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  icon?: ReactNode
  isExternal?: boolean
}

export interface NavigationProps extends BaseComponentProps {
  items: NavItem[]
  logo?: ReactNode
  variant?: 'default' | 'minimal' | 'sidebar'
}

// Hero section types
export interface HeroProps extends BaseComponentProps {
  title: string
  subtitle?: string
  description?: string
  cta?: {
    primary?: {
      text: string
      href: string
    }
    secondary?: {
      text: string
      href: string
    }
  }
  backgroundImage?: string
  variant?: 'default' | 'minimal' | 'gradient'
}

// Project types
export interface Project {
  id: string
  title: string
  description: string
  imageUrl?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  status?: 'completed' | 'in-progress' | 'planned'
}

export interface ProjectCardProps extends BaseComponentProps {
  project: Project
  variant?: 'default' | 'minimal' | 'detailed'
}

// Experience types
export interface Experience {
  id: string
  company: string
  position: string
  description: string
  startDate: Date
  endDate?: Date
  technologies?: string[]
  achievements?: string[]
  type?: 'full-time' | 'part-time' | 'contract' | 'internship'
}

export interface ExperienceCardProps extends BaseComponentProps {
  experience: Experience
  variant?: 'default' | 'timeline' | 'compact'
}

// Skill types
export interface Skill {
  id: string
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: string
  icon?: string
  description?: string
}

export interface SkillCardProps extends BaseComponentProps {
  skill: Skill
  showLevel?: boolean
  variant?: 'default' | 'minimal' | 'detailed'
}

// Contact types
export interface ContactInfo {
  email: string
  phone?: string
  location?: string
  social?: {
    platform: string
    url: string
    icon?: ReactNode
  }[]
}

export interface ContactFormData {
  name: string
  email: string
  subject?: string
  message: string
}

export interface ContactProps extends BaseComponentProps {
  contactInfo: ContactInfo
  showForm?: boolean
}

// UI Component types
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface ToastProps {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title?: string
  message: string
  duration?: number
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
} 