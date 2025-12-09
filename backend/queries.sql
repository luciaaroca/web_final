-- Crear tabla users
CREATE TABLE users (
  user_id serial NOT NULL PRIMARY KEY, 
  userName varchar(45) NOT NULL, 
  email varchar(100) NOT NULL UNIQUE, 
  password varchar(350)  NOT NULL
);
-- Crear tabla tshirts
CREATE TABLE tshirts (
  tshirt_id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(300) NOT NULL,
  description TEXT,
  sizes VARCHAR(50),
  price NUMERIC(10,2) NOT NULL,
  image TEXT NOT NULL,
  type VARCHAR(50),
  league_name VARCHAR(100)
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
INSERT INTO tshirts (name , description,  sizes, price, image, type, league_name) VALUES
('Real Oviedo', 'Equipación local del Real Oviedo 2025/26-Azul', 'S,M,L,XL,XXL', 20.00, 'https://cdn.footballkitarchive.com/2025/09/12/P94AhO1lsobpVhO.jpg','Liga','La Liga' ),
('Real Oviedo', 'Equipación local del Real Oviedo 2025/26 - Rosa/negro', 'S,M,L,XL,XXL', 20.00, 'https://cdn.footballkitarchive.com/2025/08/03/B8UwujyajvREHj4.jpg','Liga','La Liga' ),
('Aston Villa', 'Equipación Aston Villa 2025/26 - 	Claret/Azul cielo', 'S,M,L,XL,XXL', 20.00, 'https://cdn.footballkitarchive.com/2025/07/19/oHl9m2AVpKx9AcP.jpg','Liga','Premier League'),
('Fluminense', 'Camiseta de la equipación local del Fluminense FC 2025', 'S,M,L,XL,XXL', 20.00, 'https://cdn.footballkitarchive.com/2025/03/24/318RpnxyuzBf38j.jpg','Retro', NULL),
('Fluminense', 'Camiseta de la equipación local del Fluminense FC 2025', 'S,M,L,XL,XXL', 20.00, 'https://cdn.footballkitarchive.com/2025/03/24/318RpnxyuzBf38j.jpg','Especial', NULL);

--Orders
INSERT INTO orders (user_id) VALUES
(1),
(2),
(2);

--favorites
INSERT INTO favorites  (user_id, tshirt_id ) VALUES
(3, 3),
(3, 4),
(2, 4);

--orders-tshirts
INSERT INTO order_tshirts (order_id, tshirt_id, quantity) VALUES
(1, 2, 1),
(1, 3, 2),
(2, 1, 1);