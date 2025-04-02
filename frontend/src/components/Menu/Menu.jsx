import React, { useEffect, useRef, useState } from "react";
import "./Menu.css";
import axios from "axios";

const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Hamısı");
  const [searchQuery, setSearchQuery] = useState("");
  const categoryDivRef = useRef(null);

  // Kategorilere göre gruplanmış yemekler
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [foodsRes, categoriesRes] = await Promise.all([
          fetch("https://kafexazar-9.onrender.com/api/foods"),
          fetch("https://kafexazar-9.onrender.com/api/categories/getCategories"),
        ]);
  
        const [foodsData, categoriesData] = await Promise.all([
          foodsRes.json(),
          categoriesRes.json(),
        ]);
  
        setFoods(foodsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };
  
    fetchData();
  }, []);
  

  // Kategorilere göre grupla ve filtrele
  const getFilteredFoods = () => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCategory === "Hamısı") {
      return filtered;
    }

    return filtered.filter((food) => {
      const category = categories.find((cat) => cat._id === food.category);
      return category?.name === selectedCategory;
    });
  };

  const filteredFoods = getFilteredFoods();

  // Kategori butonlarına tıklandığında
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    scrollToCategory(category);
  };

  // Kategoriye kaydırma
  const scrollToCategory = (category) => {
    const buttons = categoryDivRef.current?.querySelectorAll("button");
    buttons?.forEach((button) => {
      if (button.textContent === category) {
        button.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    });
  };

  // "Hamısı" seçildiğinde tüm kategorileri ve yemekleri göster
  const showAllCategories = selectedCategory === "Hamısı";

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p
          className="section-subtitle text-center label-2"
          style={{ marginTop: "50px" }}
        >
          Special Selection
        </p>
        <h2 className="headline-1 section-title text-center">
          Kafe Xazar Menyu
        </h2>

        <div className="search-container">
          <input
            type="text"
            placeholder="Yemək axtar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Kategori butonları */}
        <div className="category-container">
          <div className="category-div" ref={categoryDivRef}>
            <button
              onClick={() => handleCategoryClick("Hamısı")}
              className={selectedCategory === "Hamısı" ? "active-category" : ""}
            >
              Hamısı
            </button>

            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => handleCategoryClick(category.name)}
                className={
                  selectedCategory === category.name ? "active-category" : ""
                }
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {!showAllCategories && (
          <h3 className="category-title">{selectedCategory}</h3>
        )}

        {/* Yemek listesi */}
        <div className="food-list-container">
          {showAllCategories ? (
            categories.map((category) => {
              const categoryFoods = filteredFoods.filter(
                (food) => food.category === category._id
              );

              return (
                categoryFoods.length > 0 && (
                  <div key={category._id}>
                    <h3 className="category-title">{category.name}</h3>
                    <ul className="grid-list">
                      {categoryFoods.map((food) => (
                        <li key={food._id}>
                          <div className="menu-card hover:card">
                            <figure
                              className="card-banner img-holder"
                              style={{ width: "100px", height: "100px" }}
                            >
                              <img
                                src={food.image}
                                width="100"
                                height="100"
                                loading="lazy"
                                alt={food.name}
                                className="img-cover"
                                onError={(e) => {
                                  e.target.src = "/default-food.png";
                                }}
                              />
                            </figure>

                            <div>
                              <div className="title-wrapper">
                                <h3 className="title-3">
                                  <a href="#" className="card-title">
                                    {food.name}
                                  </a>
                                </h3>
                                <span className="badge label-1">
                                  {food.categoryNew}
                                </span>
                                <span className="span title-2">
                                  {food.price} AZN
                                </span>
                              </div>

                              {food.ingredients?.length > 0 && (
                                <p className="card-text label-1">
                                  {food.ingredients.join(", ")}
                                </p>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              );
            })
          ) : (
            <ul className="grid-list">
              {filteredFoods.map((food) => (
                <li key={food._id}>
                  <div className="menu-card hover:card">
                    <figure
                      className="card-banner img-holder"
                      style={{ width: "100px", height: "100px" }}
                    >
                      <img
                        src={food.image}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt={food.name}
                        className="img-cover"
                        onError={(e) => {
                          e.target.src = "/default-food.png";
                        }}
                      />
                    </figure>

                    <div>
                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a href="#" className="card-title">
                            {food.name}
                          </a>
                        </h3>
                        <span className="span title-2">{food.price} AZN</span>
                      </div>

                      {food.ingredients?.length > 0 && (
                        <p className="card-text label-1">
                          {food.ingredients.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Diğer UI elemanları */}
        <a href="#" className="btn btn-primary">
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">
            View All Menu
          </span>
        </a>

        <img
          src="./MenuImages/shape-5.png"
          width="921"
          height="1036"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
        <img
          src="./MenuImages/shape-6.png"
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-3 move-anim"
        />
      </div>
    </section>
  );
};

export default Menu;
