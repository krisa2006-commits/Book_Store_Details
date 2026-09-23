const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const { connectDatabase } = require("./src/db/db");
const bookRoute = require("./src/routes/bookRoutes");

const app = express();

app.use(express.json());

connectDatabase();

app.use("/api/v1/books", bookRoute);

app.get("/", (req, res) => {
  res.send("Book Store API is working");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is working ${process.env.PORT}`);
});