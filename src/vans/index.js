const vans = require(`./data`);
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send(vans);
});

router.get("/:id", function (req, res) {
  const id = req.params.id;
  const van = vans.find((van) => van.id === id);

  if (!van) {
    res.status(204);
  }
  res.send(van);
});

module.exports = router;
