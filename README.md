# Challenge-todos
### BE and BE application.

## Installation guide

### 1. Install dependencies
Run this command in order to install the dependencies of server(BE)
```sh
$ npm install
```

### 2. Create the Database
We need to create a Database with postgress, just the database because we are going to connect it by the ORM Sequelize, so Sequelize is going to create the table and all columns. In the next step we are going to set all enviroment variables related with this DB and make passible the connection.

### 3. Ejecute Query to create DB 

```sh 
    CREATE TABLE IF NOT EXISTS tasks(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    description text NOT NULL CHECK (description <> ''),
    completed boolean NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 4. This to run server and connect to the DB

| Env variable　　　　　　　　　　　　　| Description 　　　　　　　　| Example |
| :--  | :--         | :--         |
| `DB_DATABASE` | DB name that we're going to connect. | DB_DATABASE=tasks
| `DB_USER` | Our user that access to the DB. | DB_USER=root
| `DB_PASSWORD` | Password to authenticate and connect to our DB. | DB_PASSWORD=password
| `DB_HOST` | Host where our DB lives. | DB_HOST=127.0.0.1
| `DB_PORT` | Port in the host for our DB. | DB_PORT=3306


### 5. Run the application


This next command will build the application
```sh
$ npm run build 
```

This next command will start server by default on port [4000](http://localhost:4000) 
```sh
$ npm start 
```

