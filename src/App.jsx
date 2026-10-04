import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={<ProductDetail />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
        <p>
          © 2026 Shopora. Built with React + Tailwind CSS.
        </p>
      </footer>
    </CartProvider>
  );
}

export default App;