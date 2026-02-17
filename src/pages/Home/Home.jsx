import products from "../../data/products";
import ProductCard from "../../components/ProductCard";

function Home() {
  return (
    <div>
      <h2>Products</h2>
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
