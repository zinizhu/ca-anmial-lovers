import express from "express";
import cors from "cors";
import pg from "pg";

import { DOGS_STATUS } from "./mock-data/dogs";
import { DB_CONFIG, GET_DOGS_INFO , GET_DOGS_STATUS} from "./db/constants";
import { getDogById, getDogStatusById } from "./db/db";

const { Pool } = pg;
const pool = new Pool(DB_CONFIG);

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api", async (req, res) => {
  res.json({ message: "GET /api 200 OK" });
});

app.get("/api/dogs/info", async (req, res) => {
  const client = await pool.connect();
  try {
    const response = await client.query(GET_DOGS_INFO);
    res.json({dogs: response.rows})
  } catch (error) {
    res.status(500).send({ error: error });
  } finally {
    client.release();
  }
});

app.get("/api/dogs/status", async (req, res) => {
  const client = await pool.connect();
  try {
    const response = await client.query(GET_DOGS_STATUS);
    res.json({dogs_status: response.rows})
  } catch (error) {
    res.status(500).send({ error: error });
  } finally {
    client.release();
  }
});

app.get("/api/dog/info/:id", async (req, res) => {
  const dogId = parseInt(req.params.id, 10);
  const client = await pool.connect();
  const response = await getDogById(dogId, client);
  if (response.err) {
    res.status(500).send({ error: response.err });
  }
  res.json({ dog: response.dog });
});

app.get("/api/dog/status/:id", async (req, res) => {
  const dogId = parseInt(req.params.id, 10);
  const client = await pool.connect();
  const response = await getDogStatusById(dogId, client);
  if (response.err) {
    res.status(500).send({ error: response.err });
  }
  res.json({ dog_status: response.dog_status });
});

app.get("*", function (req, res) {
  res.status(404).send("Unregistered route.");
});

app.listen(8080, () => {
  console.log("server running on localhost:8080");
});
