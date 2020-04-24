import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/v1", indexRouter);

app.listen(PORT);
