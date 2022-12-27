import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/fullstack_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => {
  console.log("Database Connected");
});

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(5000, () => {
  console.log(`Server Berjalan di port 5000`);
});
