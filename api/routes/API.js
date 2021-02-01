var express = require("express");
var router = express.Router();

var db = require("../db");

// Default API Route
router.get("/", function (req, res, next) {
    res.json("API is working properly");
});

router.get("/user", (req, res) => {
    if (req.user)
        res.json(req.user);
    else
        res.status(204).json({ error: "No active user" });
});

/*
 * Bank Routing
 */
router.get("/bank", function (req, res, next) {
    db.getBank().then(data => {
        if (data === -1)
            res.status(404).json({ error: 'No bank information found' });
        else
            res.json(data);
    })
});
router.post("/bank", function (req, res, next) {
    db.createBank().then(data => {
        res.json(data);
    })
});
router.put("/bank", function (req, res, next) {
    db.updateBank(req.body).then(data => {
        if (data === -1)
            res.status(404).json({ error: 'No bank information found. Update unsuccessful.' });
        else
            res.json(data);
    })
});
router.delete("/bank", function (req, res, next) {
    db.deleteBank().then(data => {
        if (data === -1)
            res.status(404).json({ error: 'No bank information found. Delete unsuccessful.' });
        else
            res.json('Delete successful');
    })
});

/*
 * Devices Routing
 */
router.get("/devices", function (req, res, next) {
    db.getAllDevices().then(data => {
        if (data === -1)
            res.status(404).json({ error: 'No device information found' });
        else
            res.json(data);
    })
});
router.get("/devices/:id", function (req, res, next) {
    db.getDevice(req.params.id).then(data => {
        if (data === -1)
            res.status(404).json({ error: 'No device with that ID found' });
        else
            res.json(data);
    })
});
router.post("/devices", function (req, res, next) {
    db.createDevice(req.body).then(data => {
        res.json(data);
    })
});
router.put("/devices/:id", function (req, res, next) {
    db.updateDevice(req.body, req.params.id).then(data => {
        if (data === -1)
            res.status(404).json({ error: 'No device with that ID found. Update unsuccessful.' });
        else
            res.json(data);
    })
});
router.delete("/devices/:id", function (req, res, next) {
    db.deleteDevice(req.params.id).then(data => {
        if (data === -1)
            res.status(404).json({ error: 'No device with that ID found. Delete unsuccessful.' });
        else
            res.json('Deleted device with ID ' + data);
    })
});

/*
 * Games Routing
 */
router.get("/games", function (req, res, next) {
    db.getAllGames().then(data => {
        if (data === -1)
            res.status(404).json({ error: 'No game information found' });
        else
            res.json(data);
    })
});
router.get("/games/:id", function (req, res, next) {
    db.getGame(req.params.id).then(data => {
        if (data === -1)
            res.status(404).json({ error: 'No game with that ID found' });
        else
            res.json(data);
    })
});
router.post("/games", function (req, res, next) {
    db.createGame(req.body).then(data => {
        res.json(data);
    })
});
router.put("/games/:id", function (req, res, next) {
    db.updateGame(req.body, req.params.id).then(data => {
        if (data === -1)
            res.status(404).json({ error: 'No game with that ID found. Update unsuccessful.' });
        else
            res.json(data);
    })
});
router.delete("/games/:id", function (req, res, next) {
    db.deleteGame(req.params.id).then(data => {
        if (data === -1)
            res.status(404).json({ error: 'No game with that ID found. Delete unsuccessful.' });
        else
            res.json('Deleted game with ID ' + data);
    })
});

module.exports = router;
