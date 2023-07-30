const { Request, Response } = require("express");
const { HttpError } = require("../utils");
const scrape = require("../services/scrape");
const scrapes = require("../services/scrapes");

const getHealth = (_req, res) =>
    res.status(200).json({
        status: "OK",
    });

/**
 * @param {Request} req
 * @param {Response} res
 */
const scrapeController = async (req, res, next) => {
    const url = req.query.url;

    try {
        const title = await scrape(url);
        res.status(200).json({ title });
    } catch (err) {
        next(err);
    }
};

/**
 * @param {Request} req
 * @param {Response} res
 */
const scrapesController = async (req, res, next) => {
    const url = req.query.urls?.split(",");

    try {
        const titles = await scrapes(url);
        res.status(200).json({ titles });
    } catch (err) {
        next(err);
    }
};

module.exports = { getHealth, scrapeController, scrapesController };
