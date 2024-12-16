import { Router } from "express";
import multer from "multer";

import { config } from "../config/multer.js";

const route = Router();

route.post("/upload", multer(config).single("file"), (request, response) => {
  response.json({ request: request.file });
});

export { route as uploadRoute };
