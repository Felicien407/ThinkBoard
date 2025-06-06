import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(rateLimiter);
// app.use((req, res, next) => {
//   console.log("New request received");
//   next();
// });

app.use(noteRoutes);

const port = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to my thinkboard APIs" });
});
