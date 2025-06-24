import express from "express";
import { createRequestHandler } from "@remix-run/express";

const app = express();

app.use(express.static("public"));

app.all(
  "*",
  createRequestHandler({
    build: await import("./build/index.js"),
    mode: process.env.NODE_ENV,
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});;
