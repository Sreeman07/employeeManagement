import exp from "express";
import mongoose from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = exp();

// CORS (add your frontend URL later)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://employee-management-b6yaqo4rx-sreeman07s-projects.vercel.app"
    ],
  })
);

// body parser
app.use(exp.json());

// routes
app.use("/emp-api", empRoute);

// DB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL); // ✅ use Atlas

    console.log("✅ DB connected");

    const port = process.env.PORT || 4000;

    app.listen(port, () =>
      console.log(`🚀 server running on port ${port}`)
    );
  } catch (err) {
    console.log("❌ DB error:", err.message);
    process.exit(1);
  }
};

connectDB();

// error middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});