import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const USD_TO_PKR = 276.37;

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const priceInPKR = product.price * USD_TO_PKR;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <Link
        to={`/products/${product.id}`}
        className="flex h-64 items-center justify-center bg-slate-50 p-8"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Product Content */}
      <div className="flex flex-1 flex-col p-5">

        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {product.category}
        </p>

        {/* Title */}
        <Link to={`/products/${product.id}`}>
          <h2 className="mt-2 line-clamp-2 min-h-12 text-base font-bold text-slate-900 transition hover:text-indigo-600">
            {product.title}
          </h2>
        </Link>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm font-semibold text-amber-500">
            ★ {product.rating ?? "N/A"}
          </span>

          <span className="text-xs text-slate-400">
            ({product.reviews?.length ?? 0} reviews)
          </span>
        </div>

        {/* Price + Cart */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">

          <p className="text-xl font-black text-slate-900">
            Rs.{" "}
            {priceInPKR.toLocaleString("en-PK", {
              maximumFractionDigits: 0,
            })}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Add to Cart
          </button>

        </div>

      </div>
    </article>
  );
}

export default ProductCard;