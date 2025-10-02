Real-Time Analytics Service
A NestJS-based backend application for tracking and broadcasting real-time user events. It supports JWT authentication, PostgreSQL for data storage, and WebSocket (Socket.IO) for live event streaming to connected clients.

for db 
CREATE USER nest_user WITH ENCRYPTED PASSWORD 'password123';
CREATE DATABASE analytics_db;
GRANT ALL PRIVILEGES ON DATABASE analytics_db TO nest_user;
\c analytics_db
GRANT ALL PRIVILEGES ON SCHEMA public TO nest_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO nest_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO nest_user;


Features

User registration & login with JWT

Role-based authentication (user)

Track analytics events (page views, clicks, logins, etc.)

Store events in PostgreSQL

Real-time event broadcasting via WebSockets

 Tech Stack

NestJS

TypeORM

PostgreSQL

Socket.IO

 Installation
# Install dependencies
npm install

# Run the app (development)
npm run start:dev

 Authentication

Use /auth/register to create an account

Use /auth/login to get a JWT token

Add Authorization: Bearer <token> header for protected routes

 WebSocket

Connect via Socket.IO

Listen for real-time events on channel: event

Emit new events to newEvent

