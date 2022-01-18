if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");

const app = express();

const mongoose = require("mongoose");

const Character = require("./models/characters");

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

app.get("/", async (req, res) => {
  const charList = await Character.find();
  res.write(`<pre>${JSON.stringify(charList, null, 2)}</pre>`);
  res.end();
});

app.listen(PORT);
