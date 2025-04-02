import express from "express";
import { createCategory, getAllCategories } from "../controller/CategoryController.js";

const router = express.Router();

router.post("/createCategory", createCategory); // POST /api/categories
router.get('/getCategories', getAllCategories);

export default router;