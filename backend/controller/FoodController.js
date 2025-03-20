import Food from "../model/FoodModel.js";

// 1. Tüm yiyecekleri getir
export const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2. Belirli bir yiyeceği getir
export const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ message: "Yiyecek bulunamadı!" });
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3. Yeni bir yiyecek ekle
export const createFood = async (req, res) => {
  const { name, category, price, ingredients, categoryNew, image } = req.body;

    try {
        const food = new Food({
            name,
            category,
            price,
            ingredients,
            image,
            categoryNew,
        });

        await food.save();
        res.status(201).json({ message: 'Food item created successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create food item', error });
    }
};

// 4. Yiyeceği güncelle
export const updateFood = async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 5. Yiyeceği sil
export const deleteFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.json({ message: "Yiyecek silindi!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
