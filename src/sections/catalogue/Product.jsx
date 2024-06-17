import Card from "../../components/Card";

const Product = ({ product }) => {
  return (
    <Card className="catalogue-product">
      <div className="catalogue-product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="catalogue-product-textarea">
        <div className="catalogue-product-text">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
        <div className="catalogue-product-colors">
          <p>Available in</p>
          <p>Colors</p>
        </div>
      </div>
    </Card>
  );
};

export default Product;
