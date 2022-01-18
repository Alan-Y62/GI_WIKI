if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");

const app = express();

app.use("/public", express.static("public"));

app.set("view engine", "ejs")

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
