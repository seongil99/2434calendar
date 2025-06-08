# 2434calendar

## Project Overview

A modern calendar application built with cutting-edge web technologies.

## Technology Stack

### Frontend
- **Framework**: Next.js 15.3.3 (React 19)
- **Build Tool**: Next.js (Turbopack)
- **Package Manager**: npm
- **Styling**: Tailwind CSS 4
- **Languages**: TypeScript, JavaScript
- **Linting**: ESLint

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
- **Containerization**: Docker
- **Container Orchestration**: Docker Compose

## Project Structure

```
2434calendar/
├── frontend/                 # Next.js frontend application
│   ├── src/                  # Source code
│   ├── public/               # Static assets
│   ├── package.json          # Dependencies and scripts
│   ├── tsconfig.json         # TypeScript configuration
│   ├── next.config.ts        # Next.js configuration
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   └── eslint.config.mjs     # ESLint configuration
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
- Node.js and npm (for local development)

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

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Backend
```bash
cd backend
./gradlew bootRun
```

## Key Features

- 📅 Calendar view and event management
- 🔐 OAuth2-based authentication system
- 📊 Monitoring and metrics collection
- 🔄 Batch processing system
- 📱 Responsive web design
- 🐳 Docker container support

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
