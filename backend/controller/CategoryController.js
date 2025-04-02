import Category from "../model/CategoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || typeof name !== "string") {
      return res.status(400).json({
        success: false,
        error: "Geçersiz kategori adı",
      });
    }

    const trimmedName = name.trim();

    // Kategori kontrolü
    const existingCategory = await Category.findOne({
      name: { $regex: new RegExp(`^${trimmedName}$`, "i") },
    });

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        error: `${trimmedName} kategorisi zaten var`,
      });
    }

    // Kategori oluştur
    const newCategory = await Category.create({ name: trimmedName });

    res.status(201).json({
      success: true,
      data: {
        id: newCategory._id,
        name: newCategory.name,
        createdAt: newCategory.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Kategori oluşturulamadı",
    });
  }
};
// CategoryController.js
export const getAllCategories = async (req, res) => {
    try {
      const categories = await Category.find().sort({ name: 1 });
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };