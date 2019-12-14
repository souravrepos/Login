const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/keys");

const app = express();

app.use(bodyParser.json());

// Connection created for mongoose
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

// Server Port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Node Server started at PORT ${port}`));
