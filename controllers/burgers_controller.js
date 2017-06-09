var express = require("express");
var exphbs = require("express-handlebars");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
   
    db.burgersModel.findAll({    
    }).then(function(dbBugers) {
    	var hbsObject = {
      	burgersModel: dbBugers
      }
      console.log(hbsObject);
      res.render("index",hbsObject);
    });
  });


router.post("/", function(req, res) {
  db.burgersModel.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(dbBugers) {
    res.redirect("/");
  })
})

router.put("/:id", function(req, res) {
  db.burgersModel.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(dbBugers) {
    res.redirect("/");
  });
});

module.exports = router;
