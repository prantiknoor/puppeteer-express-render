const openBrowser = require("./open-browser");

const scrape = async (url) => {
    const browser = await openBrowser();

    const page = await browser.newPage();

    await page.goto(url || "https://google.com");

    const title = await page.title();

    return title;
};

module.exports = scrape;
