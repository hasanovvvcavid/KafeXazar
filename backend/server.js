import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import FoodRoutes from "./router/FoodRoutes.js";




dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/foods", FoodRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});
