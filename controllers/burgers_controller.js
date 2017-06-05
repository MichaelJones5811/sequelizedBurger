var express = require("express");
var router = express.Router();
var burgerModels = require("../models/burger.js");


router.get("/", function(req, res) {
    burgerModels.all(function(data) {
        var hbsObject = {
            burgerModels: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgerModels.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});
router.post("/", function(req, res) {
    burgerModels.create(["burger_name,devoured"], [req.body.burger_name, req.body.devoured],
        function() {
            res.redirect("/");
        });
});
module.exports = router;
