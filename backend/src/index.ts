import express from "express";
import cors from "cors";

import { DOGS, DOGS_STATUS } from './mock-data/dogs';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api", async (req, res) => {
  res.json({ message: "GET /api 200 OK" });
});

app.get("/api/dogs/info", async (req, res) => {
    res.json({ dogs: DOGS });
});

app.get("/api/dogs/status", async (req, res) => {
  res.json({ status: DOGS_STATUS });
});

app.get("/api/dog/info/:id", async (req, res) => {
  const dogId = parseInt(req.params.id, 10)
  const filteredDogs = DOGS.filter((d) => d.id === dogId)
  if (filteredDogs.length !== 1) {
    res.status(500).send({error: "More than one dog have the requested ID."})
  }
  res.json({ message: filteredDogs[0] });
});

app.get("/api/dog/status/:id", async (req, res) => {
  const dogId = parseInt(req.params.id, 10)
  const filteredDogs = DOGS_STATUS.filter((d) => d.id === dogId)
  if (filteredDogs.length !== 1) {
    res.status(500).send({error: "More than one dog have the requested ID."})
  }
  res.json({ message: filteredDogs[0] });
});

app.get('*', function(req, res){
  res.status(404).send('Unregistered route.');
});

app.listen(8080, () => {
  console.log("server running on localhost:8080");
});
