const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const indexRouter = require("./src/routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/v1", indexRouter);

app.listen(PORT, console.log("Server started in PORT 3000"));
