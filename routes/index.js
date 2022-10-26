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
      time: "00:05",
      image:
        "https://raw.githubusercontent.com/ParkJiwoo1/Orange_api/master/routes/EMC.png?token=GHSAT0AAAAAABYI2SS362BIX3PMSHTCUCZWY2YZEQA",
    },
    {
      id: "8801675558269",
      time: "10:00",
      image:
        "https://raw.githubusercontent.com/ParkJiwoo1/Orange_api/master/routes/PI.png?token=GHSAT0AAAAAABYI2SS2M2IQZKIJJVBAPKZYY2YZFVQ",
    },
  ]);
});
router.post("/api", function (req, res) {
  res.status(200).json({
    message: "call post api demo",
  });
});

module.exports = router;
