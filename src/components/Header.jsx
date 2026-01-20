import { Link } from "react-router-dom";

export default function Header({ cart }) {
  const total = Object.values(cart).reduce((a, b) => a + b.qty, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success w-100">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/products">
          GreenLeaf Naturals
        </Link>
        <div className="ms-auto">
          <Link className="btn btn-light me-2" to="/products">
            Products
          </Link>
          <Link className="btn btn-warning" to="/cart">
            🛒 {total}
          </Link>
        </div>
      </div>
    </nav>
  );
}
