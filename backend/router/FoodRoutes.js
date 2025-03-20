import express from "express"
import { createFood, deleteFood, getAllFoods, getFoodById, updateFood } from "../controller/FoodController.js";


const router = express.Router();

router.get("/", getAllFoods);
router.get("/:id", getFoodById);
router.post("/create", createFood);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

export default router;