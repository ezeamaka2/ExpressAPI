import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Stage two, dependencies setdup");
  next();
});

export default router;
