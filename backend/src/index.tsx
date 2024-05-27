import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/", async (req, res) => {
  res.json({ message: "/api/ success!" });
});

app.get("/", async (req, res) => {
    res.json({ message: "success!" });
  });

app.listen(8080, () => {
  console.log("server running on localhost:8080");
});
