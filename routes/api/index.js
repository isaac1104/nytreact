const router = require("express").Router();
const articleRoutes = require("./articles");

router.use("/api/articles", articleRoutes);
module.exports = router;
