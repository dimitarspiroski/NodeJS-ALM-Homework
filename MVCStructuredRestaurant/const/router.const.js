const router = require("express").Router();
const inventory = require("../routes/auth.routes");
const inventory = require("../routes/restaurant.routes");

router.use("/restaurant", inventory);

module.exports = router;
