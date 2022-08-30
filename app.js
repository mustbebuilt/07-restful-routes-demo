const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

const routes = require("./routes/routes");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// add for RESTful
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));

app.use("/", routes);

// remove for sample files
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Database
// get driver connection
const dbo = require("./db/connection");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});

app.listen(3000);

console.log("Express on 3000");

module.exports = app;
