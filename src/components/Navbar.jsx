import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  function navClass({ isActive }) {
    return `text-sm font-medium transition ${
      isActive
        ? "text-indigo-600"
        : "text-slate-600 hover:text-indigo-600"
    }`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link
          to="/"
          className="text-2xl font-black tracking-tight text-slate-900"
        >
          SHOP<span className="text-indigo-600">ORA</span>
        </Link>

        <div className="flex items-center gap-6">

          <NavLink to="/" className={navClass}>
            Products
          </NavLink>

          <NavLink to="/cart" className={navClass}>
            <span className="flex items-center gap-2">
              Cart

              <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-bold text-white">
                {cartCount}
              </span>
            </span>
          </NavLink>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;