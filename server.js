const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://<user1>:<password1>@ds229108.mlab.com:29108/heroku_sn6wbnxt",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("DB connected successfully!"))
  .catch((err) => {
    console.log("DB connection error: " + err);
  });

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
