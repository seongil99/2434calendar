# 2434calendar

## Project Overview

A modern calendar application built with cutting-edge web technologies, featuring React Router v7, React 19, and Bun for optimal performance.

## Technology Stack

### Frontend
- **Framework**: React Router v7.5.3 (with SSR support)
- **React Version**: React 19.1.0 (latest features)
- **Build Tool**: Vite 6.3.3
- **Package Manager**: Bun (ultra-fast)
- **Styling**: Tailwind CSS 4.1.4
- **Languages**: TypeScript, JavaScript
- **Runtime**: Bun (development & production)
- **Calendar**: react-big-calendar

### Backend
- **Framework**: Spring Boot 3.4.5
- **Language**: Java 21
- **Database**: PostgreSQL 17
- **ORM**: Spring Data JPA
- **Security**: Spring Security with OAuth2
- **Build Tool**: Gradle
- **Batch Processing**: Spring Batch
- **Monitoring**: Spring Boot Actuator, Micrometer (Prometheus)
- **API Documentation**: SpringDoc OpenAPI 3

### DevOps
- **Containerization**: Docker (Multi-stage builds)
- **Container Orchestration**: Docker Compose

## Project Structure

```
2434calendar/
├── frontend/                 # React Router v7 frontend application
│   ├── app/                  # React Router application routes
│   │   ├── routes/           # Page components
│   │   ├── entry.client.tsx  # Client-side entry point
│   │   ├── entry.server.tsx  # Server-side entry point (customized for Bun)
│   │   └── root.tsx          # Root component
│   ├── public/               # Static assets
│   ├── package.json          # Dependencies and scripts
│   ├── bun.lock              # Bun lockfile
│   ├── tsconfig.json         # TypeScript configuration
│   ├── vite.config.ts        # Vite configuration
│   ├── react-router.config.ts # React Router configuration
│   └── Dockerfile            # Frontend Docker configuration (multi-stage)
├── backend/                  # Spring Boot backend application
│   ├── src/                  # Source code
│   ├── build.gradle          # Gradle configuration
│   ├── Dockerfile            # Backend Docker configuration
│   └── gradlew               # Gradle Wrapper
├── docker-compose.yaml       # Docker Compose configuration
└── .env                      # Environment variables (not tracked in git)
```

## Getting Started

### Prerequisites
- Docker and Docker Compose
- Java 21 (for local development)
- Bun (for local frontend development)

### Running with Docker Compose

1. Clone the repository
   ```bash
   git clone https://github.com/seongil99/2434calendar.git
   cd 2434calendar
   ```

2. Create a `.env` file with necessary environment variables (see `.env.example`)

3. Build and start the services
   ```bash
   docker compose up -d --build
   ```

4. Access the application
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:8000
   - PostgreSQL: localhost:5432

### Local Development

#### Frontend (React Router v7 + Bun)
```bash
cd frontend
bun install
bun run dev           # Development server
bun run build         # Production build
bun run start         # Production server
```

#### Backend
```bash
cd backend
./gradlew bootRun
```

## Key Features

- 📅 Interactive calendar with event management
- ⚡ Ultra-fast Bun runtime for optimal performance
- 🎯 Modern React Router v7 with SSR support
- 🎨 Beautiful UI with Tailwind CSS v4
- 🔐 OAuth2-based authentication system
- 📊 Monitoring and metrics collection
- 🔄 Batch processing system
- 📱 Responsive web design
- 🐳 Optimized Docker multi-stage builds

## Architecture Highlights

### Frontend Performance
- **Bun Runtime**: Lightning-fast package installation and execution
- **React 19**: Latest React features including concurrent rendering
- **Vite Build**: Fast development and optimized production builds
- **SSR Support**: Server-side rendering with React Router v7

### Docker Optimization
- **Multi-stage Builds**: Optimized for production with minimal image size
- **Bun Integration**: Full Bun ecosystem from development to production
- **Build Caching**: Efficient layer caching for faster builds

## API Documentation

After running the backend server, you can access the API documentation at:
- Swagger UI: http://localhost:8000/swagger-ui.html
- OpenAPI JSON: http://localhost:8000/v3/api-docs

## Environment Variables

Set the following environment variables in your `.env` file:

```env
# Database configuration
POSTGRES_DB=calendar_db
POSTGRES_USER=calendar_user
POSTGRES_PASSWORD=your_password

# Spring datasource configuration
SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/calendar_db
SPRING_DATASOURCE_USERNAME=calendar_user
SPRING_DATASOURCE_PASSWORD=your_password
SPRING_JPA_HIBERNATE_DDL_AUTO=update
```

## Development Commands

### Frontend
```bash
# Install dependencies
bun install

# Development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Type checking
bun run typecheck
```

### Backend
```bash
# Run development server
./gradlew bootRun

# Build
./gradlew build

# Run tests
./gradlew test
```

### Docker
```bash
# Build and start all services
docker compose up -d --build

# View logs
docker compose logs frontend
docker compose logs backend

# Stop services
docker compose down
```

## Migration Notes

This project has been migrated from Next.js to React Router v7:
- **Performance**: Bun provides significantly faster package installation and runtime
- **Modern React**: React 19 support with latest features
- **SSR**: Server-side rendering maintained with React Router v7
- **Build Optimization**: Multi-stage Docker builds for production efficiency

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
