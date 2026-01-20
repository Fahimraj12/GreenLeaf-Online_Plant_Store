import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Main Hero Section */}
      <div
        className="flex-grow-1 d-flex align-items-center justify-content-center text-center"
        style={{
          width: "100vw",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-3" style={{ maxWidth: "700px" }}>
          <h1 className="fw-bold text-dark display-2">GreenLeaf Naturals</h1>
          <p className="mt-3 fs-5 text-dark">
            GreenLeaf Naturals is a modern houseplant brand dedicated to
            bringing nature into urban living spaces. We carefully source
            healthy, long-lasting plants that improve air quality, reduce
            stress, and create a calm, refreshing environment in your home and
            workplace.
          </p>
          <button
            className="btn btn-success btn-lg mt-3"
            onClick={() => navigate("/products")}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-success text-white text-center py-3">
        <div className="container-fluid">
          <p className="mb-1 fw-semibold">© 2026 GreenLeaf Naturals</p>
          <small>Growing greener homes, one plant at a time.</small>
        </div>
      </footer>
    </div>
  );
}
