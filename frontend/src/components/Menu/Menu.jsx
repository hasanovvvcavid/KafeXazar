import React, { useEffect, useRef, useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Hamısı");
  const [searchQuery, setSearchQuery] = useState(""); 
  const categoryDivRef = useRef(null);

  // Kategorilere göre gruplanmış yemekler
  const groupedFoods = foods.reduce((acc, food) => {
    if (!acc[food.category]) {
      acc[food.category] = [];
    }
    acc[food.category].push(food);
    return acc;
  }, {});

  const filteredFoods = foods.filter((food) => {
    const matchesCategory =
      selectedCategory === "Hamısı" || food.category === selectedCategory;
    const matchesSearch = food.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    // Tıklanan butonu bul ve kaydırma yap
    const buttons = categoryDivRef.current.querySelectorAll("button");
    buttons.forEach((button) => {
      if (button.textContent === category) {
        button.scrollIntoView({
          behavior: "smooth", // Yumuşak kaydırma
          block: "nearest", // En yakın konuma kaydır
          inline: "center", // Butonu yatayda ortala
        });
      }
    });
  };

  // Sol butona tıklandığında sola kaydır
  const scrollLeft = () => {
    if (categoryDivRef.current) {
      const scrollAmount = categoryDivRef.current.clientWidth * 0.4; // %40 kaydırma
      categoryDivRef.current.scrollBy({
        left: -scrollAmount, // Sola kaydır
        behavior: "smooth", // Yumuşak kaydırma
      });
    }
  };

  // Sağ butona tıklandığında sağa kaydır
  const scrollRight = () => {
    if (categoryDivRef.current) {
      const scrollAmount = categoryDivRef.current.clientWidth * 0.4; // %40 kaydırma
      categoryDivRef.current.scrollBy({
        left: scrollAmount, // Sağa kaydır
        behavior: "smooth", // Yumuşak kaydırma
      });
    }
  };

  // "Hamısı" seçildiğinde tüm kategorileri ve yemekleri göster
  const showAllCategories = selectedCategory === "Hamısı";

  useEffect(() => {
    // Backend API'den yemekleri çekiyoruz
    fetch("http://localhost:3000/api/foods") // ✅ Backend'in API endpoint'ini buraya yaz
      .then((response) => response.json())
      .then((data) => setFoods(data)) // Gelen veriyi state'e kaydediyoruz
      .catch((error) => console.error("Hata oluştu:", error));
  }, []);

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">
          Special Selection
        </p>
        <h2 className="headline-1 section-title text-center">
          Kafe Xazar Menu
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
          {/* <button className="scroll-button left" onClick={scrollLeft}>
            &lt;
          </button> */}
          <div className="category-div" ref={categoryDivRef}>
            {["Hamısı", "İçki", "Şorba", "Kabablar", "Yeməklər", "Səhər Yeməkləri"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={
                    selectedCategory === category ? "active-category" : ""
                  }
                >
                  {category}
                </button>
              )
            )}
          </div>
          {/* <button className="scroll-button right" onClick={scrollRight}>
            &gt;
          </button> */}
        </div>
        {!showAllCategories && (
          <h3 className="category-title">{selectedCategory}</h3>
        )}
        {/* Yemekleri göster */}
        {showAllCategories ? (
          // "Hamısı" seçildiğinde tüm kategorileri ve yemekleri göster
          Object.keys(groupedFoods).map((category) => (
            <div key={category}>
              <h3 className="category-title">{category}</h3>
              <ul className="grid-list">
                {groupedFoods[category].filter((food) =>
                    food.name.toLowerCase().includes(searchQuery.toLowerCase())
                  ).map((food, index) => (
                  <li key={index}>
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
                        />
                      </figure>

                      <div>
                        <div className="title-wrapper">
                          <h3 className="title-3">
                            <a href="#" className="card-title">
                              {food.name}
                            </a>
                          </h3>

                          {food.categoryNew && (
                            <span className="badge label-1">
                              {food.categoryNew}
                            </span>
                          )}

                          <span className="span title-2">${food.price}</span>
                        </div>

                        {food.ingredients.length > 0 || food.categoryNew ? (
                          <p className="card-text label-1">
                            {food.ingredients.join(", ")}
                          </p>
                        ) : (
                          <div className="card-text label-1"></div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          // Diğer kategoriler seçildiğinde sadece o kategoriye ait yemekleri göster
          <ul className="grid-list">
            {foods
              .filter((food) => food.category === selectedCategory)
              .map((food, index) => (
                <li key={index}>
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
                      />
                    </figure>

                    <div>
                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a href="#" className="card-title">
                            {food.name}
                          </a>
                        </h3>

                        {food.categoryNew && (
                          <span className="badge label-1">
                            {food.categoryNew}
                          </span>
                        )}

                        <span className="span title-2">${food.price}</span>
                      </div>

                      {food.ingredients.length > 0 || food.categoryNew ? (
                        <p className="card-text label-1">
                          {food.ingredients.join(", ")}
                        </p>
                      ) : (
                        <div className="card-text label-1"></div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        )}

        {/* Diğer UI elemanları */}
        <a href="#" className="btn btn-primary">
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">
            View All Menu
          </span>
        </a>

        <img
          src="../public/MenuImages/shape-5.png"
          width="921"
          height="1036"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
        <img
          src="../public/MenuImages/shape-6.png"
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