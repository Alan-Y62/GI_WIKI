if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");

const app = express();

app.use("/public", express.static("public"));

const path = require("path");

const mongoose = require("mongoose");

//enable req.body
const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//ejs
app.set("view engine", "ejs");

//static files
app.use("/public", express.static("public"));
app.use("/public", express.static(path.join(__dirname)));

const dbConnect = () => {
  try {
    mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
      console.log("db connected");
  } catch {
    console.log("ERROR: Failed to connect to MongoDB");
  }
};

dbConnect();

//routes
app.use("/", require("./routes/index"));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
