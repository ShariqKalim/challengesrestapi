const express = require("express");
const cors = require("cors");
require("./db/conn");

const challenges = require("./models/challenges");
const mongoose = require("mongoose");
const router = require("./routers/challenge");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Running on the Port ${port}`);
});
