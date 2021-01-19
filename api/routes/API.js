var express = require("express");
var router = express.Router();
var db = require("../db");

router.get("/", function (req, res, next) {
    res.send("API is working properly");
});
router.get("/bank", function (req, res, next) {
    db.getBank().then(data => {
        res.send(data);
    })
});

module.exports = router;
