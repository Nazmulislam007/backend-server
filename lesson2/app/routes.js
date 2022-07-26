const router = require("express").Router();

router.use("/api/v1/ticktes", require("../routes/ticket"));

router.get("/health", (_req, res) => {
  res.status(200).json({ message: "Health route visited successfully" });
});

module.exports = router;
