# 2434calendar

## Project Overview

A calendar application built with modern web technologies.

## Technology Stack

### Frontend
- **Framework**: Vue.js 3.5
- **Build Tool**: Vite
- **Package Manager**: Bun.js
- **State Management**: Pinia
- **Router**: Vue Router
- **Languages**: TypeScript, JavaScript

### Backend
- **Framework**: Spring Boot 3.4.5
- **Language**: Java 21
- **Database**: PostgreSQL 17
- **ORM**: Spring Data JPA
- **Security**: Spring Security with OAuth2
- **Build Tool**: Gradle

### DevOps
- **Containerization**: Docker
- **Container Orchestration**: Docker Compose

## Project Structure

```
2434calendar/
├── frontend/                 # Vue.js frontend application
│   ├── src/                  # Source code
│   ├── public/               # Public assets
│   ├── Dockerfile            # Frontend Docker configuration
│   └── package.json          # Dependencies and scripts
├── backend/                  # Spring Boot backend application
│   ├── src/                  # Source code
│   ├── Dockerfile            # Backend Docker configuration
│   └── build.gradle          # Gradle configuration
├── docker-compose.yaml       # Docker Compose configuration
└── .env                      # Environment variables (not tracked in git)
```

## Getting Started

### Prerequisites
- Docker and Docker Compose
- Java 21 (for local development)
- Bun.js (for local development)

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

### Development

#### Frontend
```bash
cd frontend
bun install
bun run dev
```

#### Backend
```bash
cd backend
./gradlew bootRun
```
