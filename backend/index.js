require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// * express
const app = express();
const indexRouter = require("./routes/index");

// * middlewares
app.use(cors());
app.use(express.json());
app.use("/api", indexRouter);

// * database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connection established!!");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(`Something went wrong with database:- ${err}`));
