-- Demo admin for local development (password: password123)
-- bcrypt hash generated for "password123"
INSERT INTO users (email, password_hash, display_name, role)
VALUES (
  'admin@yinilow.local',
  '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
  'YINILOW Admin',
  'ADMIN'
)
ON CONFLICT (email) DO NOTHING;
