-- Generar tabla de usuarios:
DELETE FROM users;
INSERT INTO users (user_id, username, email, "password", money_limit) VALUES
  (1, 'MariaDiana1999', 'mariadiana1999@example.com', 'contraseña123', 1000.50),
  (2, 'PaulMira', 'paulmira@example.com', 'password456', 1500.00),
  (3, 'AnaAnita', 'ananita@example.com', 'clave789', 800.80),
  (4, 'CorinaDiana', 'corinadiana@example.com', 'secreto999', 1200.00),
  (5, 'AndreiVlad', 'andreivlad@example.com', 'access123', 950.70);


-- Generar tabla de categorías:
INSERT INTO categories (category_id, "name")
VALUES
  (1, 'bills'),
  (2, 'transport'),
  (3, 'entertainment'),
  (4, 'shopping'),
  (5, 'grocery');


-- Generar tabla de gastos:
DELETE FROM expenses;
INSERT INTO expenses (expense_id, quantity, description, date, is_monthly, user_id, category_id)
VALUES
  (1, 104.05, 'Pago de factura de luz', '2023-01-15', false, 1, 1),
  (2, 20.45, 'Pago suscripción Netflix', '2023-01-01', true, 1, 1),
  (3, 51.00, 'Gasolina', '2023-01-16', false, 1, 2),
  (4, 23.70, 'Entrada al cine', '2023-01-20', false, 1, 3),
  (5, 75.95, 'Compras faldas Bershka', '2023-01-06', false, 1, 4),
  (6, 86.74, 'Compra para fin de semana', '2023-01-19', false, 1, 5),
  (7, 50.38, 'Pago de factura de gas', '2023-01-15', false, 2, 1),
  (8, 15.50, 'Pago Amazon Prime', '2023-01-01', true, 2, 1),
  (9, 20.00, 'Abono transporte', '2023-01-03', true, 3, 2),
  (10, 48.70, 'Gasolina', '2023-01-24', false, 3, 2),
  (11, 18.90, 'Bolera en pareja', '2023-01-20', false, 3, 3),
  (12, 115.30, 'Compras regalos Reyes Magos', '2023-01-04', false, 3, 4),
  (13, 60.59, 'Comida con la abuela', '2023-01-19', false, 4, 5),
  (14, 10.00, 'Suscripción paquete PRIMOR', '2023-01-02', true, 5, 4),
  (15, 82.60, 'Entradas Concierto Vetusta Morla', '2023-01-19', false, 5, 3);


-- Generar tabla de ingresos:
DELETE FROM incomes;
INSERT INTO incomes (income_id, quantity, description, user_id, is_monthly)
VALUES
  (1, 1850.00, 'Sueldo mensual', 1, true),
  (2, 965.38, 'Pensión', 2, true),
  (3, 1200.40, 'Sueldo trabajo', 3, true),
  (4, 200.00, 'Paga mamá y papá', 4, false),
  (5, 2200.40, 'Pagas extras', 5, false);


