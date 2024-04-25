import express from "express";
import * as dotenv from "dotenv";

// load config
dotenv.config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env`,
});

//
const app = express();
// routes
app.get("/", (req, res) => res.json({ message: "App running!" }));

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
