const router = require("express").Router();
const path = require("path");

router.get("/exercise", function (req, res) {
    res.sendFiles(path.join(_dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res) {
    res.sendFiles(path.join(_dirname, "../public/stats.html"));
});