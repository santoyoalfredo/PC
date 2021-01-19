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
router.post("/bank", function (req, res, next) {
    db.createBank().then(data => {
        res.send(data);
    })
});
router.put("/bank", function (req, res, next) {
    db.updateBank(req.body).then(data => {
        res.send(data);
    })
});
router.delete("/bank", function (req, res, next) {
    db.deleteBank().then(data => {
        res.send(data);
    })
});

module.exports = router;
