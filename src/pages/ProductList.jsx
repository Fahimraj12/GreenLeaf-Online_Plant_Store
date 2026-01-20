import { useState } from "react";
import { plants } from "../data/plants";

export default function ProductList({ cart, setCart }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const addToCart = (p) => setCart({ ...cart, [p.id]: { ...p, qty: 1 } });

  const categories = ["All", ...new Set(plants.map((p) => p.category))];

  const filteredPlants = plants.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mt-4">
      {/* Search */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search plants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm ${activeCategory === cat ? "btn-success" : "btn-outline-success"}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="row">
        {filteredPlants.map((p) => (
          <div className="col-sm-6 col-md-4 mb-4" key={p.id}>
            <div className="card h-100 shadow-sm">
              <div className="plant-img-wrapper">
                <img src={p.img} alt={p.name} className="plant-img" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{p.name}</h5>
                <p className="fw-semibold">₹{p.price}</p>
                <button
                  className="btn btn-success w-100"
                  disabled={cart[p.id]}
                  onClick={() => addToCart(p)}
                >
                  {cart[p.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
