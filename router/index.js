const router = require("express").Router();
const controller = require("../controllers");

// HOME
router.get("/", controller.home);

router.use(controller.notFound);
router.use(controller.error);

// DASHBOARD
const dashboard = require("./dashboard");
router.get("/dashboard", dashboard);

module.exports = router;
