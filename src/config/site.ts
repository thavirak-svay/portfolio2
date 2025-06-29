// Site configuration

export const siteConfig = {
  name: 'Portfolio',
  description: 'Modern portfolio website showcasing skills and projects',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    twitter: '@yourusername',
  },
  keywords: [
    'portfolio',
    'developer',
    'web development',
    'React',
    'Next.js',
    'TypeScript',
  ],
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'mailto:your.email@example.com',
  },
  navigation: {
    main: [
      { title: 'Home', href: '#home' },
      { title: 'About', href: '#about' },
      { title: 'Skills', href: '#skills' },
      { title: 'Experience', href: '#experience' },
      { title: 'Projects', href: '#projects' },
      { title: 'Contact', href: '#contact' },
    ],
    footer: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
    ],
  },
} as const

export type SiteConfig = typeof siteConfig 