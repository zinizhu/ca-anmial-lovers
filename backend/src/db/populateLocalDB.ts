import pg from "pg";
import {
  DB_CONFIG,
  CREATE_ENUM_GENDER,
  CREATE_ENUM_MEDICAL_CONDITION,
  CREATE_TABLE_DOGS,
  DROP_TABLE_DOGS,
  DELETE_ENUM_GENDER,
  DELETE_ENUM_MEDICAL_CONDITION,
  INSERT_DOG,
  DOGS_INFO,
  DROP_TABLE_DOGS_STATUS,
  INSERT_DOG_STATUS,
  DOGS_STATUS,
  CREATE_TABLE_DOGS_STATUS,
  DELETE_ENUM_RESCUE_STATUS,
  DELETE_ENUM_ADOPTER_FOSTER_STATUS,
  CREATE_ENUM_RESCUE_STATUS,
  CREATE_ENUM_ADOPTER_FOSTER_STATUS
} from "./constants";

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
      console.log("Dogs table creation failed. Skip table population.");
    }
  } finally {
    client.release();
    console.log("Pool Client released.");
    return res;
  }
};

const dropsDogsStatusTable = async (client: pg.PoolClient) => {
  try {
    await client.query("BEGIN");
    await client.query(DROP_TABLE_DOGS_STATUS);
    await client.query(DELETE_ENUM_RESCUE_STATUS);
    await client.query(DELETE_ENUM_ADOPTER_FOSTER_STATUS);
    await client.query("COMMIT");
    console.log("Dogs status table successfully deleted.");
    return 0;
  } catch (error) {
    await client.query("ROLLBACK");
    console.log("Detect error: ", error);
    console.log("Delete dogs status table action terminated.");
    return 1;
  }
};

const dropExistingDogsStatusTable = async () => {
  const client = await pool.connect();
  let res = 0;
  try {
    res = await dropsDogsStatusTable(client);
  } finally {
    client.release();
    console.log("Pool Client released.");
    return res;
  }
};

const createAndPopulateDogsStatusTable = async () => {
  const client = await pool.connect();
  let res = 0;
  try {
    res = await createDogsStatusTable(client);
    if (res === 0) {
      res = await populateDogsStatusTable(client);
    } else {
      console.log("Dogs status table creation failed. Skip table population.");
    }
  } finally {
    client.release();
    console.log("Pool Client released.");
    return res;
  }
};

const createDogsStatusTable = async (client: pg.PoolClient) => {
  try {
    await client.query("BEGIN");
    await client.query(CREATE_ENUM_RESCUE_STATUS);
    await client.query(CREATE_ENUM_ADOPTER_FOSTER_STATUS);
    await client.query(CREATE_TABLE_DOGS_STATUS);
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

const populateDogsStatusTable = async (client: pg.PoolClient) => {
  try {
    await client.query("BEGIN");

    for (let dog_status of DOGS_STATUS) {
      await client.query(INSERT_DOG_STATUS, Object.values(dog_status));
    }

    await client.query("COMMIT");
    console.log("Dogs status table successfully populated.");
    return 0;
  } catch (error) {
    await client.query("ROLLBACK");
    console.log("Detect error: ", error);
    console.log("Populate dogs status table action terminated.");
    return 1;
  }
};

const { Pool } = pg;
const pool = new Pool(DB_CONFIG);

let res = 0;
if (process.env.DELETE_EXISTING_TABLE === "true") {
  res = await dropExistingDogsTable();
}

if (res === 0) {
  await createAndPopulateDogsTable();
}

res = 0;
if (process.env.DELETE_EXISTING_TABLE === "true") {
  res = await dropExistingDogsStatusTable();
}

if (res === 0) {
  await createAndPopulateDogsStatusTable();
}

pool.end();
console.log("Connection pool closed.");
