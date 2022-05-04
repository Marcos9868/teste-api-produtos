CREATE EXTENSION IF NOT EXISTS 'uuid-oosp'

CREATE TABLE IF NOT EXISTS products_list(
  uuid uuid DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  quantity INTEGER,
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