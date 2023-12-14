-- Crear tabla users:
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username TEXT,
  email TEXT,
  password TEXT,
  money_limit MONEY
);

-- Crear tabla expenses:
CREATE TABLE expenses (
  expense_id SERIAL PRIMARY KEY,
  quantity MONEY,
  description TEXT,
  date DATE,
  is_monthly BOOLEAN DEFAULT false,
  user_id INTEGER,
  category_id INTEGER,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id),
  CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES categories(category_id),
);

-- Crear tabla categories:
CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  name TEXT
);

-- Crear tabla incomes:
CREATE TABLE incomes (
  income_id SERIAL PRIMARY KEY,
  quantity MONEY,
  description TEXT,
  is_monthly BOOLEAN DEFAULT false,
  user_id INTEGER,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id)
);
