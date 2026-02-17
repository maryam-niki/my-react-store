import { useParams } from "react-router-dom";
import products from "../../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.title} width="300" />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
