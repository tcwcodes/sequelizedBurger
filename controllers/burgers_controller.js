var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([req.body.burger_name], function(result) {
        console.log(result);
        res.json({ id: result.id });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var whatToSelect = "id = '" + req.params.id + "'";
    console.log("whatToSelect: " + whatToSelect);
    burger.updateOne([req.body.devoured], [whatToSelect],
    function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
    console.log("devoured: " + req.body.devoured);
});

router.get("/api/burgers", function(req, res) {
    burger.selectAll(function(data) {
        res.json(data);
    });
});

module.exports = router;