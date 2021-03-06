CREATE TABLE IF NOT EXISTS tasks(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    description text NOT NULL CHECK (description <> ''),
    completed boolean NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert task data
INSERT INTO tasks (name, description)
VALUES ('Download Vuejs','Download Vuejs desc');

INSERT INTO tasks (name, description)
VALUES ('Create UI Web','Create UI Web desc ');

INSERT INTO tasks (name, description)
VALUES ('Download Flutter','Download Flutter desc');

INSERT INTO tasks (name, description)
VALUES ('Design UI', 'Design UI desc ');