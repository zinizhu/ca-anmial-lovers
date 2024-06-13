import pg from "pg";
import {
  DB_CONFIG,
  CREATE_ENUM_GENDER,
  CREATE_ENUM_MEDICAL_CONDITION,
  CREATE_TABLE_DOGS,
  DROP_TABLE_DOGS,
  GET_DOG_BY_ID,
  DELETE_ENUM_GENDER,
  DELETE_ENUM_MEDICAL_CONDITION,
  INSERT_DOG,
  DOGS_INFO,
} from "./constants";
import { Dog, DogResponse } from "./types";

// Rename to populateLocalDB.ts
const createDogsTable = async (client: pg.PoolClient) => {
  try {
    await client.query("BEGIN");
    await client.query(CREATE_ENUM_GENDER);
    await client.query(CREATE_ENUM_MEDICAL_CONDITION);
    await client.query(CREATE_TABLE_DOGS);
    await client.query("COMMIT");
    console.log("Dogs table successfully created.");
    return 0;
  } catch (error) {
    await client.query("ROLLBACK");
    console.log("Detect error: ", error);
    console.log("Create dogs table action terminated.");
    return 1;
  }
};

const dropsDogsTable = async (client: pg.PoolClient) => {
  try {
    await client.query("BEGIN");
    await client.query(DROP_TABLE_DOGS);
    await client.query(DELETE_ENUM_GENDER);
    await client.query(DELETE_ENUM_MEDICAL_CONDITION);
    await client.query("COMMIT");
    console.log("Dogs table successfully deleted.");
    return 0;
  } catch (error) {
    await client.query("ROLLBACK");
    console.log("Detect error: ", error);
    console.log("Delete dogs table action terminated.");
    return 1;
  }
};

const populateDogsTable = async (client: pg.PoolClient) => {
  try {
    await client.query("BEGIN");

    for (let dog of DOGS_INFO) {
      await client.query(INSERT_DOG, Object.values(dog));
    }

    await client.query("COMMIT");
    console.log("Dogs table successfully populated.");
    return 0;
  } catch (error) {
    await client.query("ROLLBACK");
    console.log("Detect error: ", error);
    console.log("Populate dogs table action terminated.");
    return 1;
  }
};

const dropExistingDogsTable = async () => {
  const client = await pool.connect();
  let res = 0;
  try {
    res = await dropsDogsTable(client);
  } finally {
    client.release();
    console.log("Pool Client released.");
    return res;
  }
};

const createAndPopulateDogsTable = async () => {
  const client = await pool.connect();
  let res = 0;
  try {
    res = await createDogsTable(client);
    if (res === 0) {
      res = await populateDogsTable(client);
    } else {
      console.log("Table creation failed. Skip table population.");
    }
  } finally {
    client.release();
    console.log("Pool Client released.");
    return res;
  }
};

const { Pool } = pg;
const pool = new Pool(DB_CONFIG);

let res = 0;
if (process.env.DELETE_EXISTING_TABLE_DOGS === "true") {
  res = await dropExistingDogsTable();
}

if (res === 0) {
  await createAndPopulateDogsTable();
}

pool.end();
console.log("Connection pool closed.");
