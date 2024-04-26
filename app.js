// imports
const express = require("express");
require("dotenv").config();
const cors = require("cors");

const database = require("./src/db/Database");
const notFound = require("./src/middlewares/notFound");
const errorHandler = require("./src/middlewares/errorHandler");
const employeesRouter = require("./src/routes/employees");

const app = express();

// enable CORS
app.use(cors());

// built in middlewares
app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).status(200).json({ msg: "Home Page!, please visit our API on path: /api/v1/employees" });
});

// routes
app.use("/api/v1/employees", employeesRouter);

// custom middlewares
app.use(notFound);
app.use(errorHandler);

// connection to DB and start server
database
  .connect()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB: ", err));
