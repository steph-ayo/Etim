import "./catalogue.css";
import Products from "./Products";
import ProductsCategories from "./ProductsCategories";
import data from "./data";
import { useState } from "react";
import Button from "../../components/Button";
import { FaCartShopping } from "react-icons/fa6";

const Catalogue = () => {
  const [products, setProducts] = useState(data);

  const categories = data.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProductsHandler = (category) => {
    if (category === "all") {
      setProducts(data);
      return;
    }
    const filterProducts = data.filter(
      (product) => product.category === category
    );
    setProducts(filterProducts);
  };

  // Function for Shop button
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello Etim Vocal Enterprises, I want to buy..."
    );
    window.location.href = `https://wa.me/+2348188207410?text=${message}`;
  };

  return (
    <section id="Catalogue">
      <h2>What we sell/rent</h2>
      <h1>Our Products</h1>

      <div className="catalogue-container">
        <ProductsCategories
          categories={uniqueCategories}
          onFilterProducts={filterProductsHandler}
        />
        <Products products={products} />
      </div>
      <div className="catalogue-button">
        <Button onClick={handleClick}>
          SHOP <FaCartShopping />
        </Button>
      </div>
    </section>
  );
};

export default Catalogue;
