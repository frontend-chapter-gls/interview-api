const express = require("express");
const router = express.Router();

router.post("/", function (req, res) {
  if (!req.body.email) {
    return res.status(400).send({
      errorMessage: "Missing email",
    });
  }

  if (!req.body.password) {
    return res.status(400).send({
      errorMessage: "Missing password",
    });
  }

  if (req.body.email === "rolo@gls.pt") {
    return res.status(200).send({
      redirectUrl: "/login/success",
    });
  }

  return res.status(400).send({
    errorMessage: "Unknown email",
  });
});

router.get("/success", function (req, res) {
  return res.send("SUCCESS");
});

module.exports = router;
