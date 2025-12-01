-- Crear tabla users
CREATE TABLE users (
  user_id serial NOT NULL PRIMARY KEY, 
  userName varchar(45) NOT NULL, 
  email varchar(100) NOT NULL UNIQUE, 
  password varchar(350)  NOT NULL,
  role varchar(100) NOT NULL
);
-- Crear tabla tshirts
CREATE TABLE tshirts (
  tshirt_id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(300) NOT NULL,
  description TEXT,
  sizes VARCHAR(50),
  price NUMERIC(10,2) NOT NULL,
  image TEXT NOT NULL,
  type VARCHAR(50)
);
-- Crear tabla orders
CREATE TABLE orders (
  order_id SERIAL NOT NULL PRIMARY KEY,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
-- Crear tabla favorites
CREATE TABLE favorites (
  favorite_id SERIAL NOT NULL PRIMARY KEY,
  user_id INT NOT NULL,
  tshirt_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (tshirt_id) REFERENCES tshirts(tshirt_id) ON DELETE CASCADE
);

-- Crear tabla orders-tshirts
CREATE TABLE order_tshirts (
  id SERIAL NOT NULL PRIMARY KEY,
  order_id INT NOT NULL,
  tshirt_id INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
  FOREIGN KEY (tshirt_id) REFERENCES tshirts(tshirt_id) ON DELETE CASCADE
);


--INSERTAR DATOS
--USERS
INSERT INTO users (userName, email, password, role) VALUES
('Lucia', 'lucia@example.com', 'password123', 'admin'),
('Carlos', 'carlos@example.com', 'abc12345', 'user'),
('Marta', 'marta@example.com', 'qwerty789', 'user'),
('Javier', 'javier@example.com', 'pass4567', 'user'),
('Ana', 'ana@example.com', 'mypassword', 'user'),
('Pedro', 'pedro@example.com', 'secure123', 'user'),
('Sofia', 'sofia@example.com', 'letmein987', 'user'),
('Diego', 'diego@example.com', 'hello1234', 'user'),
('Elena', 'elena@example.com', 'adminpass', 'user'),
('Raul', 'raul@example.com', 'userpass1', 'user');

--Tshirts
INSERT INTO users (userName, email, password, role) VALUES
('Lucia', 'lucia@example.com', 'password123', 'admin'),
('Lucia', 'lucia@example.com', 'password123', 'admin');
