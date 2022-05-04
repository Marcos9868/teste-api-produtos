CREATE EXTENSION IF NOT EXISTS 'uuid-oosp'
CREATE EXTENSION IF NOT EXISTS 'pgcrypto'

CREATE TABLE IF NOT EXISTS products_list(
  uuid uuid DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  quantity INTEGER,
  PRIMARY KEY (uuid)
)

CREATE TABLE IF NOT EXISTS users_list(
  uuid uuid DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  PRIMARY KEY (uuid)
)

INSERT INTO products_list (
  name, 
  description, 
  price, 
  quantity
) VALUES (
  'Nvidia GeForce GTX 770', 
  'Placa Nvidia GeForce GTX 770 2GB', 
  'R$1.500,00', 
  2
)

INSERT INTO users_list (
  name, 
  email, 
  password
) VALUES (
  'Marcos Melo Ferreira',
  'marcos@teste.com',
  crypt('teste1234', 'my_salt')
)