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

router.get("/devices/:id", function (req, res, next) {
    db.getDevice(req.params.id).then(data => {
        res.send(data);
    })
});
router.get("/devices", function (req, res, next) {
    db.getAllDevices().then(data => {
        res.send(data);
    })
});
router.post("/devices", function (req, res, next) {
    db.createDevice(req.body).then(data => {
        res.send(data);
    })
});
router.put("/devices/:id", function (req, res, next) {
    db.updateDevice(req.body, req.params.id).then(data => {
        res.send(data);
    })
});
router.delete("/devices/:id", function (req, res, next) {
    db.deleteDevice(req.params.id).then(data => {
        res.send(data);
    })
});

module.exports = router;
