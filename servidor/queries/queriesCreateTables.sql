-- Crear tabla users:
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name TEXT,
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
  user_id INTEGER REFERENCES users(user_id),
  category_id INTEGER REFERENCES categories(category_id)
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
  user_id INTEGER REFERENCES users(user_id),
  is_monthly BOOLEAN DEFAULT false
);
