import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: "15px" }}>
        Home
      </Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
