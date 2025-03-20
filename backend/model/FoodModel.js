import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  ingredients: [String],
  image: { type: String, required: false },
  categoryNew: { type: String, required: false },
});

const Food = mongoose.model("Food", foodSchema);

export default Food; // ✅ default export EKLENDİ
