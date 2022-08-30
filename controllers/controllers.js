//var ObjectId = require("mongodb").ObjectId;
const dbo = require("../db/connection");
var ObjectId = dbo.getObjectId();
// VIEW CONTROLLER

var ObjectId = require("mongodb").ObjectId;

function viewAll(req, res) {
  console.info("View All controller");
  dbo
    .getDb()
    .collection("filmsCollection")
    .find({})
    .toArray(function (err, docs) {
      if (err) {
        console.error(err);
      }
      return res.render("films", {
        title: "All Films",
        films: docs,
      });
    });
}

function viewItem(req, res) {
  console.info("View One controller");
  let filmID = req.params.filmID;
  var o_id = new ObjectId(filmID);
  dbo
    .getDb()
    .collection("filmsCollection")
    .find({ _id: o_id })
    .toArray(function (err, docs) {
      if (err) {
        console.error(err);
      }
      console.dir(docs);
      return res.render("oneFilm", {
        title: "Some Title",
        film: docs[0],
      });
    });
}
// Add addItem functions
// Add editItem and deleteItem functions

module.exports = { viewAll, viewItem };
