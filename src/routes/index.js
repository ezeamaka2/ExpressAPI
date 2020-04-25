import express from "express";

import { indexPage } from "../controllers";
import { messagesPage, addMessage } from "../controllers/messages";

const indexRouter = express.Router();

indexRouter.get("/", indexPage);
indexRouter.get("/messages", messagesPage);
indexRouter.post("/messages", addMessage);

export default indexRouter;
