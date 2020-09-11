const express = require('express');

const router = express.Router();

module.exports = (app) => {

    router.get('/film/:filmID', (req, res) => {
        let filmID = parseInt(req.params.filmID);
        app.set('myDb').collection('filmsCollection').find({"filmID": filmID}).toArray(function(err, docs) {
            if (err) {
                console.error(err)
            }
            console.dir(docs);
            return res.render('oneFilm', {
                title : docs[0].filmName,
                film: docs[0]
                });
        })
    });
     
    // add RESTful POST, PUT and DELETE Routes





  
    return router;

}



// var express = require('express');
// var router = express.Router();

// router = function(app){
//     app.route('/film')
//     .get(function (req, res) {
//         //console.dir(req.body)
//         res.send(`
//         GET good: ${req.method}
//         Data: ${req.body}
//         `); 
//     })
//     .post(function (req, res) {
//         //console.dir(req.body)
//         //res.send(req.body)
//         //res.send(`POST good: ${req.method}`);
//         res.json(req.body);
//     })
//     .put(function (req, res) {
//         res.send('PUT good')
//     })
//     .delete(function (req, res) {
//         es.send('Delete good')
//     });

//     //GET PARAMETER
//     app.route('/film/:filmID')
//     .get(function (req, res) {
//         res.send(`
//         GET good: ${req.method}
//         Data: ${req.params.filmID}
//         `); 
//     })
// }

// module.exports = router;