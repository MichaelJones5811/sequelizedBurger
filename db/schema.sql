CREATE database burgers_DB;

USE burgers_DB;


CREATE TABLE burgers (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "burger_name" which cannot contain null --
  burger_name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "devoured" which cannot contain null --
  devoured BOOLEAN NOT NULL,
  -- Makes a  --
  eat_date TIMESTAMP NOT NULL,
  
  PRIMARY KEY (id)
  );
