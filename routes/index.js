var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/api", function (req, res) {
  res.status(200).json([
    {
      id: "024039642208",
      time: "05:00",
      image: "etc",
    },
    {
      id: "8801675558269",
      time: "10:00",
      image: "etc",
    },
  ]);
});
router.post("/api", function (req, res) {
  res.status(200).json({
    message: "call post api demo",
  });
});

module.exports = router;
