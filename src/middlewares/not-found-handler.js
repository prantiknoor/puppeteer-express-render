const { HttpError } = require("../utils");

const notFoundHandler = (_req, _res) => {
    throw new HttpError(404, "Not found");
};

module.exports = notFoundHandler;
