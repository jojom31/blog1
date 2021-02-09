

CREATE TABLE Posts (
    id serial PRIMARY KEY,
    blog title  text NOT NULL,
    blog body text,
    timestamp integer
);

CREATE TABLE Users (
    id serial PRIMARY KEY,
    name varchar(30)text NOT NULL,
    last name varchar(30)text NOT NULL,
    email varchar(30)text,
    password password
    
);

CREATE TABLE Comments (
    id serial PRIMARY KEY,
    comment body text NOT NULL,
    user REFERENCE,
    integer
);