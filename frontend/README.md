# 2434calendar Frontend

A modern calendar application frontend built with React Router v7, React 19, and Bun for optimal performance.

## Tech Stack

- **Framework**: React Router v7.5.3 with Server-Side Rendering
- **React**: React 19.1.0 (latest features)
- **Runtime**: Bun (ultra-fast package manager & runtime)
- **Build Tool**: Vite 6.3.3
- **Styling**: Tailwind CSS 4.1.4
- **TypeScript**: v5.8.3
- **Calendar**: react-big-calendar
- **Icons**: Lucide React

## Features

- 📅 Interactive calendar with event management
- 🚀 Server-side rendering for better SEO and performance
- ⚡️ Hot Module Replacement (HMR) with Vite
- 🎨 Modern UI with Tailwind CSS v4
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations with React Router
- 🔒 TypeScript by default for type safety
- ⚡ Ultra-fast development with Bun runtime
- 📱 Responsive design for all devices

## Project Structure

```
frontend/
├── app/                      # React Router application
│   ├── routes/              # Page components and routes
│   │   ├── home.tsx         # Home page
│   │   └── _index.tsx       # Index route
│   ├── entry.client.tsx     # Client-side entry point
│   ├── entry.server.tsx     # Server-side entry point (customized for Bun)
│   └── root.tsx             # Root component with layout
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── bun.lock                 # Bun lockfile
├── vite.config.ts           # Vite configuration
├── react-router.config.ts   # React Router configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── Dockerfile               # Multi-stage Docker build
```

## Getting Started

### Prerequisites

- **Bun**: Install from [bun.sh](https://bun.sh)
- **Node.js 18+**: For compatibility (if needed)

### Installation

Install dependencies using Bun:

```bash
bun install
```

### Development

Start the development server with HMR:

```bash
bun run dev
```

Your application will be available at `http://localhost:5173`.

### Available Scripts

```bash
# Development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Type checking
bun run typecheck

# Preview production build locally
bun run preview
```

## Building for Production

Create a production build:

```bash
bun run build
```

This generates:
- `build/client/` - Static assets for the browser
- `build/server/` - Server-side code for SSR

## Deployment

### Docker Deployment (Recommended)

The project includes a multi-stage Dockerfile optimized for Bun:

```bash
# Build the Docker image
docker build -t 2434calendar-frontend .

# Run the container
docker run -p 3000:3000 2434calendar-frontend
```

### Using Docker Compose

From the project root:

```bash
docker compose up frontend --build
```

The application will be available at `http://localhost:8080`.

### Manual Deployment

For manual deployment, ensure you have Bun installed on your server:

```bash
# Install dependencies
bun install

# Build the application
bun run build

# Start the production server
bun run start
```

## Key Features

### Calendar Functionality
- **Event Management**: Create, edit, and delete calendar events
- **Multiple Views**: Month, week, and day views
- **Interactive Interface**: Drag and drop events
- **Responsive Design**: Works on desktop and mobile

### Performance Optimizations
- **Bun Runtime**: Lightning-fast package installation and execution
- **React 19**: Latest React features including concurrent rendering
- **Vite Build**: Fast development and optimized production builds
- **SSR**: Server-side rendering for better performance and SEO

### Development Experience
- **Hot Module Replacement**: Instant updates during development
- **TypeScript**: Full type safety and IntelliSense
- **Modern CSS**: Tailwind CSS v4 with latest features
- **Fast Builds**: Vite and Bun for rapid development cycles

## Environment Variables

Create a `.env` file in the frontend directory:

```env
# Add any environment variables here
# Example:
# VITE_API_URL=http://localhost:8000
```

## Styling

This project uses [Tailwind CSS v4](https://tailwindcss.com/) for styling:

- Modern utility-first CSS framework
- Configured with custom design tokens
- Responsive design utilities
- Dark mode support ready

## API Integration

The frontend communicates with the Spring Boot backend:

- **Base URL**: `http://localhost:8000` (development)
- **Authentication**: OAuth2 integration ready
- **Data Fetching**: React Router loaders and actions

## Docker Multi-stage Build

The Dockerfile uses a multi-stage build for optimization:

1. **Dependencies**: Install only production dependencies
2. **Build**: Create production build with Vite
3. **Runtime**: Minimal runtime image with Bun

## Contributing

1. Install dependencies: `bun install`
2. Start development: `bun run dev`
3. Make your changes
4. Build and test: `bun run build`
5. Submit a pull request

## Troubleshooting

### Common Issues

1. **Port already in use**: Change port in `vite.config.ts`
2. **Build errors**: Clear cache with `rm -rf node_modules bun.lock && bun install`
3. **TypeScript errors**: Run `bun run typecheck` for detailed errors

### Development Tips

- Use `bun run dev` for the fastest development experience
- Hot reload works for both client and server code
- Check the browser console and terminal for any errors
- Use React DevTools for debugging React components

---

Built with ❤️ using React Router v7, React 19, and Bun.
