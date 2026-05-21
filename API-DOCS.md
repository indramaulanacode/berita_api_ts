# API Documentation

## Base URL
```
http://localhost:3000
```

---

## 📝 Users Endpoints

### Create User
**POST** `/users`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "admin"
}
```

**Response (201):**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "admin",
  "created_at": "2025-05-20T13:50:00.000Z",
  "updated_at": "2025-05-20T13:50:00.000Z",
  "berita": []
}
```

---

### Get All Users
**GET** `/users`

**Response (200):**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123",
    "role": "admin",
    "created_at": "2025-05-20T13:50:00.000Z",
    "updated_at": "2025-05-20T13:50:00.000Z",
    "berita": []
  }
]
```

---

### Get User by ID
**GET** `/users/:id`

**Example:**
```
GET /users/1
```

**Response (200):**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "admin",
  "created_at": "2025-05-20T13:50:00.000Z",
  "updated_at": "2025-05-20T13:50:00.000Z",
  "berita": []
}
```

---

### Update User
**PUT** `/users/:id`

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "newPassword456",
  "role": "user"
}
```

**Response (200):** Updated user object

---

### Delete User
**DELETE** `/users/:id`

**Response (200):** No content

---

### Get User Databases
**GET** `/users/:id/databases`

**Example:**
```
GET /users/1/databases
```

**Response (200):**
```json
{
  "userId": 1,
  "userName": "John Doe",
  "email": "john@example.com",
  "role": "admin",
  "databases": {
    "articles": {
      "count": 5,
      "data": [
        {
          "id": 1,
          "judul": "Breaking News Title",
          "slug": "breaking-news-title",
          "isi": "This is the full article content...",
          "gambar": "https://example.com/image.jpg",
          "kategori_id": 1,
          "author_id": 1,
          "status": "publish",
          "views": 42,
          "created_at": "2025-05-20T13:50:00.000Z",
          "updated_at": "2025-05-20T13:50:00.000Z"
        }
      ]
    },
    "summary": {
      "totalArticles": 5,
      "publishedArticles": 3,
      "draftArticles": 2
    }
  }
}
```

---

## 📂 Categories (Kategori) Endpoints

### Create Category
**POST** `/kategori`

**Request Body:**
```json
{
  "nama": "Technology",
  "slug": "technology"
}
```

**Response (201):**
```json
{
  "id": 1,
  "nama": "Technology",
  "slug": "technology",
  "created_at": "2025-05-20T13:50:00.000Z",
  "updated_at": "2025-05-20T13:50:00.000Z"
}
```

---

### Get All Categories
**GET** `/kategori`

**Response (200):** Array of categories

---

### Get Category by ID
**GET** `/kategori/:id`

**Response (200):** Category object

---

### Update Category
**PUT** `/kategori/:id`

**Request Body:**
```json
{
  "nama": "Tech News",
  "slug": "tech-news"
}
```

**Response (200):** Updated category object

---

### Delete Category
**DELETE** `/kategori/:id`

**Response (200):** No content

---

## 📰 Articles (Berita) Endpoints

### Create Article
**POST** `/berita`

**Request Body:**
```json
{
  "judul": "Breaking News Title",
  "slug": "breaking-news-title",
  "isi": "This is the full article content...",
  "gambar": "https://example.com/image.jpg",
  "kategori_id": 1,
  "author_id": 1,
  "status": "publish"
}
```

**Response (201):**
```json
{
  "id": 1,
  "judul": "Breaking News Title",
  "slug": "breaking-news-title",
  "isi": "This is the full article content...",
  "gambar": "https://example.com/image.jpg",
  "kategori_id": 1,
  "author_id": 1,
  "status": "publish",
  "views": 0,
  "created_at": "2025-05-20T13:50:00.000Z",
  "updated_at": "2025-05-20T13:50:00.000Z",
  "kategori": { "id": 1, "nama": "Technology", "slug": "technology" },
  "author": { "id": 1, "name": "John Doe", "email": "john@example.com" }
}
```

---

### Get All Articles
**GET** `/berita`

**Response (200):** Array of articles with full relationships

---

### Get Article by ID
**GET** `/berita/:id`

**Note:** This endpoint automatically increments the `views` counter.

**Response (200):** Article object with relationships and incremented views

---

### Filter Articles by Status
**GET** `/berita?status=publish`

**Status Options:** `draft`, `publish`

**Response (200):** Array of articles filtered by status

---

### Filter Articles by Category
**GET** `/berita?kategori_id=1`

**Response (200):** Array of articles from the specified category

---

### Update Article
**PUT** `/berita/:id`

**Request Body:** (All fields optional)
```json
{
  "judul": "Updated Title",
  "status": "draft",
  "isi": "Updated content..."
}
```

**Response (200):** Updated article object

---

### Delete Article
**DELETE** `/berita/:id`

**Response (200):** No content

---

## 🔍 Query Parameters

### Pagination (Ready for Implementation)
```
GET /berita?page=1&limit=10
```

### Sorting (Ready for Implementation)
```
GET /berita?sort=created_at&order=desc
```

---

## Error Responses

### Bad Request (400)
```json
{
  "statusCode": 400,
  "message": "Email already exists",
  "error": "Bad Request"
}
```

### Not Found (404)
```json
{
  "statusCode": 404,
  "message": "User with ID 999 not found",
  "error": "Not Found"
}
```

### Internal Server Error (500)
```json
{
  "statusCode": 500,
  "message": "Internal server error",
  "error": "Internal Server Error"
}
```

---

## Field Validations

### User DTO
- `name`: Required, string
- `email`: Required, valid email format, unique
- `password`: Required, minimum 6 characters
- `role`: Optional, enum: `admin`, `user` (default: `user`)

### Kategori DTO
- `nama`: Required, string
- `slug`: Required, string, unique

### Berita DTO
- `judul`: Required, string
- `slug`: Required, string, unique
- `isi`: Required, string (text)
- `gambar`: Optional, string (URL)
- `kategori_id`: Required, number (foreign key)
- `author_id`: Required, number (foreign key)
- `status`: Optional, enum: `draft`, `publish` (default: `draft`)

---

## cURL Examples

### Create a user
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","password":"pass123"}'
```

### Get all articles
```bash
curl http://localhost:3000/berita
```

### Get published articles
```bash
curl "http://localhost:3000/berita?status=publish"
```

### Update an article
```bash
curl -X PUT http://localhost:3000/berita/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"publish"}'
```

### Delete a user
```bash
curl -X DELETE http://localhost:3000/users/1
```

### Get user databases/data
```bash
curl http://localhost:3000/users/1/databases
```

---

## Response Formats

All successful responses are in JSON format with appropriate HTTP status codes:

- **200 OK** - Successful GET, PUT requests
- **201 Created** - Successful POST requests
- **204 No Content** - Successful DELETE requests (no body)
- **400 Bad Request** - Validation errors
- **404 Not Found** - Resource not found
- **500 Internal Server Error** - Server errors

---

## CORS Configuration

CORS is enabled globally. The API accepts requests from any origin.

---

## Data Types

| Type | Description | Example |
|------|-------------|---------|
| `string` | Text | `"Hello World"` |
| `number` | Integer | `1`, `42` |
| `enum` | Predefined values | `"admin"`, `"publish"` |
| `text` | Long text | Article content |
| `timestamp` | Date/Time | `"2025-05-20T13:50:00.000Z"` |

---

For more information, check [README.md](./README.md) and [QUICKSTART.md](./QUICKSTART.md)
