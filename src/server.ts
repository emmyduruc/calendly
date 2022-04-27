import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter";
import cors from "cors";

dotenv.config();
const port = process.env.PORT;
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log(` MongoDB failed to connect: ${error}`);
  });

const app = express();
app.use(cors());
app.set("port", process.env.PORT || 3000);
app.use(express.json());

app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${port}`);
});
app.use("/user", userRouter);
