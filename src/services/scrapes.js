const openBrowser = require("./open-browser");

const scrapes = async (urls) => {
    const browser = await openBrowser();

    const page = await browser.newPage();

    const titles = [];

    for (const url of urls) {
        await page.goto(url);

        const title = await page.title();

        titles.push(title)
    }

    return titles;
};

module.exports = scrapes;
