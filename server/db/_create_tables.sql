CREATE TABLE users(
     id SERIAL PRIMARY KEY
    ,username VARCHAR(255)
    ,password VARCHAR(255)
);

CREATE TABLE properties(
     id SERIAL PRIMARY KEY
    ,name VARCHAR(255)
    ,description VARCHAR(255)
    ,address VARCHAR(255)
    ,city VARCHAR(255)
    ,state VARCHAR(255)
    ,zip VARCHAR(255)
    ,image_url VARCHAR(1000)
    ,loan_amount NUMERIC(32,8)
    ,monthly_amount NUMERIC(32,8)
    ,desired_rent NUMERIC(32,8) NOT NULL
    ,user_id INT REFERENCES users (id)
);
