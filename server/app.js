import express from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";

const PORT = process.env.PORT;
const LANDING_PAGE_PATH = process.env.LANDING_PAGE_PATH;

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use("/second-semester-exam", express.static(LANDING_PAGE_PATH));

app.get("/second-semester-exam/{*any}", (_req, res) => {
  res.sendFile(path.join(LANDING_PAGE_PATH, "index.html"));
});

app.get("/", (_req, res) => {
  return res.json({ message: "Ok" });
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});

