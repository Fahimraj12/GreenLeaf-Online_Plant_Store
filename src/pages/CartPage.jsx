import { Link } from "react-router-dom";

export default function CartPage({ cart, setCart }) {
  const items = Object.values(cart);
  const totalQty = items.reduce((a, b) => a + b.qty, 0);
  const totalPrice = items.reduce((a, b) => a + b.qty * b.price, 0);

  const inc = (id) =>
    setCart({ ...cart, [id]: { ...cart[id], qty: cart[id].qty + 1 } });
  const dec = (id) =>
    cart[id].qty > 1 &&
    setCart({ ...cart, [id]: { ...cart[id], qty: cart[id].qty - 1 } });
  const del = (id) => {
    const c = { ...cart };
    delete c[id];
    setCart(c);
  };

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQty}</p>
      <p>Total Cost: ₹{totalPrice}</p>

      {items.map((i) => (
        <div className="card mb-3" key={i.id}>
          <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
            <img src={i.img} width="80" alt={i.name} />
            <h5>{i.name}</h5>
            <p>₹{i.price}</p>
            <div>
              <button
                className="btn btn-sm btn-success me-2"
                onClick={() => inc(i.id)}
              >
                +
              </button>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => dec(i.id)}
              >
                -
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => del(i.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        className="btn btn-primary me-3"
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>
      <Link className="btn btn-secondary" to="/products">
        Continue Shopping
      </Link>
    </div>
  );
}
