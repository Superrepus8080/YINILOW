-- YINILOW baseline schema (Phase 0)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         VARCHAR(320) NOT NULL UNIQUE,
  phone         VARCHAR(32),
  password_hash VARCHAR(255) NOT NULL,
  display_name  VARCHAR(120),
  role          VARCHAR(32) NOT NULL DEFAULT 'BUYER',
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT users_role_chk CHECK (role IN ('BUYER', 'SELLER', 'HOST', 'ADMIN'))
);

CREATE TABLE IF NOT EXISTS sellers (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL UNIQUE REFERENCES users(id),
  store_name  VARCHAR(160) NOT NULL,
  status      VARCHAR(32) NOT NULL DEFAULT 'PENDING',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT sellers_status_chk CHECK (status IN ('PENDING', 'APPROVED', 'SUSPENDED'))
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users (email);
CREATE INDEX IF NOT EXISTS idx_sellers_status ON sellers (status);
