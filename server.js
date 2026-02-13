
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { urlShort, getOriginalUrl } from "./Controllers/url.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "urlShortenerDB",
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("server.ejs", { shortUrl: null });
});

app.post("/shorten", urlShort);
app.get("/:shortCode", getOriginalUrl);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
