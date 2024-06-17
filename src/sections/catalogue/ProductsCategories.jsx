import { useState } from "react";
import CategoryButton from "./CategoryButton";

const ProductsCategories = ({ categories, onFilterProducts }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProducts(activeCat);
  };

  return (
    <div className="products-categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat__btn ${
            activeCategory === category ? "primary" : "white"
          }`}
        />
      ))}
    </div>
  );
};

export default ProductsCategories;
