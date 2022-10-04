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
      image:
        "https://airfryerworld.com/images/Air-Fryer-Trader-Joes-Frozen-Sweet-Potato-Fries-AirFryerWorld-2-500x500.jpg.webp",
    },
    {
      id: "8801675558269",
      time: "10:00",
      image:
        "https://airfryerworld.com/images/Air-Fryer-Tater-Tots-AirFryerWorld-2-500x500.jpg",
    },
  ]);
});
router.post("/api", function (req, res) {
  res.status(200).json({
    message: "call post api demo",
  });
});

module.exports = router;
