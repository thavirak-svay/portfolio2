# DevBackend Portfolio

A professional backend developer portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases backend development skills, projects, and experience with a modern, responsive UI.

![DevBackend Portfolio](public/projects/portfolio-screenshot.jpg)

## Features

- 🌓 Dark/Light mode with system preference detection
- 🎨 Modern, clean UI built with TailwindCSS
- 🎭 Smooth animations and transitions using Framer Motion
- 📱 Fully responsive design for all devices
- ⚡ Built with Next.js for optimal performance
- 🔠 Typing animations with react-type-animation
- 🔍 Filterable project showcase
- 📊 Animated skill progress bars
- 📝 Contact form with validation
- 🧩 Component-based architecture

## Sections

- **Hero** - Engaging introduction with typing animation
- **About** - Professional background and expertise
- **Skills** - Visual representation of technical skills
- **Projects** - Filterable gallery of backend projects
- **Experience** - Timeline of professional experience
- **Contact** - Contact form and direct contact options
- **Footer** - Site navigation and additional links

## Tech Stack

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/devbackend-portfolio.git
   cd devbackend-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

1. **Personal Information**: Update text in components under `src/components/sections/`
2. **Projects**: Modify the `projects` array in `src/components/sections/Projects.tsx`
3. **Skills**: Update the `skillsData` array in `src/components/sections/Skills.tsx`
4. **Experience**: Modify the `experienceData` array in `src/components/sections/Experience.tsx`
5. **Colors & Theme**: Customize colors in `src/app/globals.css`
6. **Images**: Replace images in the `public/projects/` directory

## Deployment

The easiest way to deploy your portfolio is to use [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js), the platform from the creators of Next.js.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- Icons from [Heroicons](https://heroicons.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Typing animation by [React Type Animation](https://github.com/maxeth/react-type-animation)
- Image placeholders from [Unsplash](https://unsplash.com/)
