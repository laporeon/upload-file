import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (request, response) => {
  response.send({ message: "Hello!" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
