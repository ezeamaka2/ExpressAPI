import express from "express";

import { testEnvironmentVariable } from "../settings";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: testEnvironmentVariable });
  next();
});

export default router;
