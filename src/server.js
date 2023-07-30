const express = require("express");
const router = require("./router");
const {
    middlewares,
    globalErrorHandler,
    notFoundHandler,
} = require("./middlewares");

const app = express();

app.use(middlewares);

app.use("/api/v1", router);

app.use(notFoundHandler);
app.use(globalErrorHandler);

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
    console.log("App is listening on PORT", PORT);
});
