const router = require("express").Router();
const { scrapeController, getHealth, scrapesController } = require("../controllers");

router.get("/health", getHealth);

router.get("/scrape", scrapeController);

router.get("/scrapes", scrapesController);

module.exports = router;
