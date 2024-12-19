import express from "express";

import { uploadRoute } from "./routes/upload.routes.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/uploads", uploadRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
