# Modern Portfolio Website

A modern, performant, and fully-featured portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- 🚀 **Next.js 15** - Latest features including App Router and Server Components
- 🎯 **TypeScript** - Full type safety with strict configuration
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid development
- 📱 **Responsive Design** - Mobile-first approach with modern UI/UX
- ⚡ **Performance Optimized** - Image optimization, lazy loading, and bundle optimization
- 🔧 **Modern Tooling** - ESLint, Prettier, and Husky for code quality
- 🌙 **Dark/Light Mode** - Theme switching capability
- 📊 **Analytics Ready** - Google Analytics and Vercel Analytics support
- 🔒 **Security Headers** - Comprehensive security configuration
- 📝 **SEO Optimized** - Meta tags, Open Graph, and structured data

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── loading.tsx       # Loading UI
│   ├── error.tsx         # Error UI
│   └── not-found.tsx     # 404 page
├── components/            # React components
│   ├── sections/         # Page sections
│   ├── ui/              # Reusable UI components
│   └── blocks/          # Complex component blocks
├── lib/                  # Utility libraries
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
├── constants/           # Application constants
├── config/              # Configuration files
├── styles/              # Additional styles
└── assets/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint
- `lint:fix` - Fix ESLint errors
- `format` - Format code with Prettier
- `format:check` - Check code formatting
- `type-check` - Run TypeScript type checking
- `clean` - Clean build artifacts

## 🛠️ Configuration

### Environment Variables

See `.env.example` for all available environment variables. Key variables include:

- `NEXT_PUBLIC_APP_URL` - Your application URL
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` - Vercel Analytics ID

### Customization

1. **Site Configuration**: Update `src/config/site.ts`
2. **Constants**: Modify `src/constants/index.ts`
3. **Styling**: Customize Tailwind config in `tailwind.config.ts`
4. **Content**: Update sections in `src/components/sections/`

## 🎨 Styling

This project uses Tailwind CSS for styling with:

- Custom color palette
- Responsive design system
- Dark/light mode support
- Component-based architecture

## 📱 Components

### UI Components
- **Buttons** - Various button variants
- **Cards** - Content cards with different layouts
- **Modals** - Accessible modal dialogs
- **Forms** - Form components with validation

### Sections
- **Hero** - Landing section with CTA
- **About** - Personal information and bio
- **Skills** - Technical skills showcase
- **Experience** - Work experience timeline
- **Projects** - Portfolio projects grid
- **Contact** - Contact form and information

## 🔧 Development

### Code Quality

- **ESLint** - Linting with Next.js and TypeScript rules
- **Prettier** - Code formatting
- **TypeScript** - Strict type checking
- **Husky** - Git hooks for pre-commit checks

### Performance

- Image optimization with Next.js Image component
- Bundle optimization and code splitting
- Lazy loading for better performance
- SEO optimization with metadata API

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms

The project can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- Docker
- Traditional hosting

## 📊 Analytics

Configure analytics by setting the appropriate environment variables:

- Google Analytics: `NEXT_PUBLIC_GA_ID`
- Vercel Analytics: Built-in with Vercel deployment

## 🔒 Security

The project includes comprehensive security headers:

- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help or have questions:

1. Check the [documentation](docs/)
2. Create an [issue](issues/)
3. Contact the maintainer

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
