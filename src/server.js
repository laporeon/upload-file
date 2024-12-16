import express from "express";

import { uploadRoute } from "./routes/upload.routes.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(uploadRoute);

app.get("/", (request, response) => {
  return response.json({ message: "Hello!" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
