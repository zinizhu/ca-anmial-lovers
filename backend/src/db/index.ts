import pg from "pg";

const { Client } = pg;
const client = new Client({ // TODO: move to process.env
    user: "caal",
    password: "caal",
    host: "127.0.0.1",
    database: "caal",
    port: 5432
});

await client.connect();
console.log('client has connected')

const CREATE_TABLE_DOGS = `
CREATE TABLE dogs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER
);
`

const INSERT_DOG = `
INSERT INTO dogs(name, age) VALUES($1, $2) RETURNING *;
`

const SELECT_ALL_DOGS = `
SELECT * FROM dogs;
`
// const res = await client.query(CREATE_TABLE_DOGS)
// const res = await client.query(INSERT_DOG, ["chichi", 2])
const res = await client.query(SELECT_ALL_DOGS)

console.log('result:', res)

await client.end()
console.log('client has disconnected')