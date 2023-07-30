require('dotenv').config();

const puppeteer = require("puppeteer-core");

const openBrowser = async () =>
    await puppeteer.launch({
        headless: true,
        ignoreHTTPSErrors: true,
        executablePath: process.env.CHROMIUM_EXECUTABLE_PATH,
        args: [
            "--disable-setuid-sandbox",
            "--no-sandbox",
            "--single-process",
            "--no-zygote",
        ],
    });

module.exports = openBrowser;
