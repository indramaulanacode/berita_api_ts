# Quick Start Guide - Prokopim RESTful API

## 5-Minute Setup

### 1. Prerequisites
- Node.js 18+ installed
- PostgreSQL running locally (or update `.env` with your database credentials)

### 2. Setup Steps

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Create the database
createdb prokopim

# Build the project (optional - only needed for production)
npm run build
```

### 3. Run the Server

**Development mode** (with hot-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm run build
npm start
```

Server starts at: `http://localhost:3000`

## Testing the API

### 1. Create a Category
```bash
curl -X POST http://localhost:3000/kategori \
  -H "Content-Type: application/json" \
  -d '{"nama":"Tech News","slug":"tech-news"}'
```

### 2. Create a User
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John Doe",
    "email":"john@example.com",
    "password":"password123",
    "role":"admin"
  }'
```

### 3. Create an Article
```bash
curl -X POST http://localhost:3000/berita \
  -H "Content-Type: application/json" \
  -d '{
    "judul":"My First Article",
    "slug":"my-first-article",
    "isi":"This is the article content...",
    "kategori_id":1,
    "author_id":1,
    "status":"publish"
  }'
```

### 4. Get All Articles
```bash
curl http://localhost:3000/berita
```

### 5. Get Published Articles Only
```bash
curl 'http://localhost:3000/berita?status=publish'
```

### 6. Get Articles by Category
```bash
curl 'http://localhost:3000/berita?kategori_id=1'
```

## API Endpoints Summary

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/users` | List all users |
| GET | `/users/:id` | Get user details |
| POST | `/users` | Create user |
| PUT | `/users/:id` | Update user |
| DELETE | `/users/:id` | Delete user |
| GET | `/kategori` | List all categories |
| GET | `/kategori/:id` | Get category |
| POST | `/kategori` | Create category |
| PUT | `/kategori/:id` | Update category |
| DELETE | `/kategori/:id` | Delete category |
| GET | `/berita` | List all articles |
| GET | `/berita/:id` | Get article (increments views) |
| POST | `/berita` | Create article |
| PUT | `/berita/:id` | Update article |
| DELETE | `/berita/:id` | Delete article |

## Environment Variables

Edit `.env` to customize:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=prokopim

# Server
PORT=3000
NODE_ENV=development
```

## Troubleshooting

**Connection refused error?**
- Check if PostgreSQL is running: `brew services list` (macOS)
- Update DB credentials in `.env`

**Port 3000 already in use?**
- Change PORT in `.env` to another port (e.g., 3001)

**Database doesn't exist?**
- Create it: `createdb prokopim`
- TypeORM will auto-create tables on first run in development mode

## Project Structure

```
src/
├── main.ts           # Application entry point
├── app.module.ts     # Root module
├── config/           # Database configuration
├── controllers/      # API route handlers
├── dtos/            # Data validation schemas
├── entities/        # Database models
├── modules/         # NestJS modules
└── services/        # Business logic
```

## Next Steps

1. Add authentication (JWT) - see commented examples
2. Add pagination to list endpoints
3. Add search/filter capabilities
4. Implement proper error handling middleware
5. Add logging
6. Write unit tests

For more details, see [README.md](./README.md)
