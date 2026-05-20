-- ========================
-- ENUM TYPES (PostgreSQL)
-- ========================
CREATE TYPE status_enum AS ENUM ('draft', 'publish');
CREATE TYPE role_enum AS ENUM ('admin', 'penulis');

-- ========================
-- TABLE: kategori
-- ========================
CREATE TABLE kategori (
  id SERIAL PRIMARY KEY,
  nama VARCHAR(100),
  slug VARCHAR(100) UNIQUE
);

-- ========================
-- TABLE: users
-- ========================
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  nama VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role role_enum DEFAULT 'penulis',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ========================
-- TABLE: berita
-- ========================
CREATE TABLE berita (
  id SERIAL PRIMARY KEY,
  judul VARCHAR(255),
  slug VARCHAR(255) UNIQUE,
  isi TEXT,
  gambar VARCHAR(255),
  kategori_id INTEGER,
  author_id INTEGER,
  status status_enum DEFAULT 'draft',
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT fk_kategori
    FOREIGN KEY (kategori_id) REFERENCES kategori(id),

  CONSTRAINT fk_author
    FOREIGN KEY (author_id) REFERENCES users(id)
);

-- ========================
-- TABLE: komentar
-- ========================
CREATE TABLE komentar (
  id SERIAL PRIMARY KEY,
  berita_id INTEGER,
  nama VARCHAR(100),
  isi TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT fk_berita
    FOREIGN KEY (berita_id) REFERENCES berita(id)
);
