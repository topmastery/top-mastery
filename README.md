# Top Mastery

A modern, responsive web application built with Next.js that showcases professional services and portfolio work with beautiful animations and interactive elements.

## Features

- Modern and responsive design
- Animated sections powered by AOS (Animate On Scroll)
- Interactive UI components
- Portfolio showcase
- AI Assistant integration
- Back to top functionality
- Partners showcase section
- Mobile-friendly navigation

## Tech Stack

- **Framework:** Next.js 15.1.7
- **UI Library:** React 19
- **Styling:** Tailwind CSS
- **Animations:** 
  - AOS (Animate On Scroll)
  - Framer Motion
- **Icons:** 
  - Heroicons
  - React Icons
  - Tabler Icons
- **Other Libraries:**
  - Swiper for carousels

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/app
  /components     # React components
  /public         # Static assets
    /images       # Image assets
  globals.css     # Global styles
  layout.tsx      # Root layout
  page.tsx        # Home page
```

## Development

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

The project uses:
- TypeScript for type safety
- ESLint for code linting
- Tailwind CSS for styling
- Next.js App Router

## Deployment

This project is optimized for deployment on Vercel. To deploy your own instance:

1. Push your code to a Git repository
2. Import your project to [Vercel](https://vercel.com/new)
3. Vercel will detect Next.js automatically and configure the build settings
4. Your site will be deployed automatically on every push to the main branch

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is licensed under the MIT License.
