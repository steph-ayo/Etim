import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="catalogue-products" data-aos="fade-up">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
