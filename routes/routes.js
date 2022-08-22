const express = require("express");

const router = express.Router();

var ObjectId = require("mongodb").ObjectId;

module.exports = (app) => {
  router.get("/film/:filmID", (req, res) => {
    let filmID = req.params.filmID;
    var o_id = new ObjectId(filmID);
    app
      .set("myDb")
      .collection("filmsCollection")
      .find({ _id: o_id })
      .toArray(function (err, docs) {
        if (err) {
          console.error(err);
        }
        console.dir(docs);
        return res.render("oneFilm", {
          title: docs[0].filmTitle,
          film: docs[0],
        });
      });
  });

  // add RESTful POST, PUT and DELETE Routes

  return router;
};
