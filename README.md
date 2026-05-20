# Prokopim RESTful API

A RESTful API built with **NestJS** and **TypeScript** for managing news articles, categories, and users.

## Features

- **User Management**: Create, read, update, and delete users
- **Category Management**: Manage article categories
- **Article Management**: Full CRUD operations for articles with:
  - Draft/Publish status
  - View counter
  - Author and category relationships
  - Query filtering by status and category
- **Type Safety**: Full TypeScript support
- **Data Validation**: Class-validator integration
- **Database ORM**: TypeORM with PostgreSQL support
- **CORS Enabled**: Cross-origin requests supported
- **Error Handling**: Comprehensive error handling with proper HTTP status codes

## Tech Stack

- **Framework**: NestJS 11
- **Language**: TypeScript 6
- **Database**: PostgreSQL with TypeORM
- **Validation**: class-validator & class-transformer
- **Runtime**: Node.js

## Installation

### Prerequisites
- Node.js 18+ 
- PostgreSQL 12+
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <repo-url>
cd agents-typescript-restful-api-creation
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**
```bash
cp .env.example .env
```

Edit `.env` with your database credentials:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=prokopim
PORT=3000
NODE_ENV=development
```

4. **Create database and run migrations**
```bash
# Create the database
createdb prokopim

# Run the API (will auto-sync schema in development)
npm run dev
```

## Running the API

### Development
```bash
npm run dev
```
Server runs on `http://localhost:3000`

### Production
```bash
npm run build
npm start
```

## API Endpoints

### Users (`/users`)
- `GET /users` - List all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Categories (`/kategori`)
- `GET /kategori` - List all categories
- `GET /kategori/:id` - Get category by ID
- `POST /kategori` - Create new category
- `PUT /kategori/:id` - Update category
- `DELETE /kategori/:id` - Delete category

### Articles (`/berita`)
- `GET /berita` - List all articles
- `GET /berita?status=publish` - Filter by status
- `GET /berita?kategori_id=1` - Filter by category
- `GET /berita/:id` - Get article by ID (increments view counter)
- `POST /berita` - Create new article
- `PUT /berita/:id` - Update article
- `DELETE /berita/:id` - Delete article

## Request/Response Examples

### Create User
**POST** `/users`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "user"
}
```

### Create Article
**POST** `/berita`
```json
{
  "judul": "Breaking News",
  "slug": "breaking-news",
  "isi": "Article content here...",
  "gambar": "image-url.jpg",
  "kategori_id": 1,
  "author_id": 1,
  "status": "publish"
}
```

## Project Structure

```
src/
├── config/          # Database configuration
├── controllers/     # API endpoints
├── dtos/           # Data Transfer Objects
├── entities/       # TypeORM entities (database models)
├── modules/        # NestJS modules
├── services/       # Business logic
├── app.module.ts   # Root module
└── main.ts         # Entry point
```

## Error Handling

The API returns standard HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

## Database Schema

### Users Table
- `id` (int, primary key)
- `name` (varchar)
- `email` (varchar, unique)
- `password` (varchar)
- `role` (enum: admin, user)
- `created_at`, `updated_at`

### Kategori Table
- `id` (int, primary key)
- `nama` (varchar)
- `slug` (varchar, unique)
- `created_at`, `updated_at`

### Berita Table
- `id` (int, primary key)
- `judul` (varchar)
- `slug` (varchar, unique)
- `isi` (text)
- `gambar` (varchar, nullable)
- `kategori_id` (foreign key → kategori)
- `author_id` (foreign key → users)
- `status` (enum: draft, publish)
- `views` (int, default 0)
- `created_at`, `updated_at`

## Development Tips

- The `synchronize: true` option in TypeORM (dev only) auto-creates/updates tables
- DTOs provide automatic validation of request payloads
- All timestamps are managed automatically
- Foreign keys are enforced at the database level

## License

MIT

## Author

Generated with NestJS CLI and TypeScript
