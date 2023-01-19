import cors from "cors";
import express from "express";
import ipRouter from "./api/ip";
import { Request, Response,NextFunction } from "express";

const app = express();
const port = process.env.PORT || 8080;

app.use("/api/ip", ipRouter);
app.use(cors());
app.options('*', cors());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500);
});

app.listen(port, () => {
  console.log(`Archnet is listening on ${port}.`);
});