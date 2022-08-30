const express = require("express");

const router = express.Router();

router.get("/allfilms", (req, res) => {
  myControllers.viewAll(app, req, res);
});

router.get("/film/:filmID", (req, res) => {
  myControllers.viewItem(app, req, res);
});

module.exports = router;
