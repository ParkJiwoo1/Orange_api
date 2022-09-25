var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/api", function (req, res) {
  res.status(200).json({
    product: [
      { id: "1234", time: "05:00" },
      { id: "1235", time: "06:00" },
      { id: "1236", time: "10:00" },
    ],
  });
});
router.post("/api", function (req, res) {
  res.status(200).json({
    message: "call post api demo",
  });
});

module.exports = router;
