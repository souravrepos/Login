const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/keys");

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI)
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Node Server started at PORT ${port}`));
