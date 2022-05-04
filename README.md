# teste-api-produtos

Olá visitante!

Este é um projeto de API de produtos com acesso de usuário.
O intuito deste projeto é poder listar produtos, cadastrar produtos, alterar produtos e remover produtos, fazendo o mesmo também com os usuários cadastrados no banco de dados.
Além disso, o acesso a API é feito por um login que fará a verificação no banco de dados, evitando que qualquer pessoa entre sem ser autorizada.

### Stacks Utilizadas:

- Javascript
- SQL

### Frameworks Utilizados:

- NodeJS
- Express

### Banco de Dados: 

- PostgreSQL

### Instalação:

Importante seguir a instalação na ordem como esta disposta abaixo:

- Express:

```npm install express --save``` ou
```yarn add express```

- PostgreSQL(PG): 

```npm install pg --save``` ou
```yarn add pg```

- Nodemon:

```npm install nodemon --save``` ou
```yarn add nodemon```

- Dotenv (Para variáveis de ambiente):

```npm install dotenv --save``` ou
```yarn add dotenv```

### Utilização:

Para melhor experiência, recomendo que utilize um simulador de requisições, como Insomnia ou Postman.

### Rotas de produtos:

#### GET/products:

- Lista todos os produtos cadastrados no banco de dados

#### GET/products/:uuid:

- Lista um produto através de seu uuid

#### POST/products:

- Cadastra um novo produto no banco de dados

#### PUT/products/:uuid:

- Altera um produto existente

#### DELETE/products/:uuid:

- Deleta um produto do banco de dados, através de seu uuid

#### DELETE/products:

- Deleta todos os produtos do banco de dados

### Rotas de usuários:

#### GET/users:

- Lista todos os usuários cadastrados no banco de dados

#### GET/products/:uuid:

- Lista um usuário através de seu uuid

#### POST/products:

- Cadastra um novo usuário no banco de dados

#### POST/login:

- Aqui onde o usuário irá entrar com seu login e senha

#### PUT/products/:uuid:

- Altera um usuário existente

#### DELETE/products/:uuid:

- Deleta um usuário do banco de dados, através de seu uuid

#### DELETE/products:

- Deleta todos os usuários cadastrados do banco de dados

### Contato:

- Linkedin: https://www.linkedin.com/in/marcos-melo-ferreira/