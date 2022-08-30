const express = require("express");

const router = express.Router();

// add myControllers
const myControllers = require("../controllers/controllers.js");

router.get("/", (req, res) => {
  myControllers.viewAll(req, res);
});

router.get("/film/:filmID", (req, res) => {
  myControllers.viewItem(req, res);
});

module.exports = router;
