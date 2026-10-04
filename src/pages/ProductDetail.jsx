import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const USD_TO_PKR = 276.37;

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error("Product Error:", err);
        setError("Product could not be loaded.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Product not found
        </h2>

        <Link
          to="/products"
          className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const priceInPKR = product.price * USD_TO_PKR;

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <Link
          to="/products"
          className="mb-8 inline-block font-semibold text-indigo-600 hover:text-indigo-800"
        >
          ← Back to Products
        </Link>

        <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">

          {/* Product Image */}
          <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-slate-100 p-8">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-[420px] w-full object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-indigo-600">
              {product.category}
            </p>

            <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
              {product.title}
            </h1>

            <p className="mt-5 text-3xl font-black text-indigo-600">
              Rs.{" "}
              {priceInPKR.toLocaleString("en-PK", {
                maximumFractionDigits: 0,
              })}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="rounded-lg bg-yellow-100 px-3 py-1 font-bold text-yellow-700">
                ⭐ {product.rating}
              </span>

              <span className="text-slate-500">
                {product.reviews?.length || 0} reviews
              </span>
            </div>

            <p className="mt-6 leading-7 text-slate-600">
              {product.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-slate-400">Brand</p>
                <p className="mt-1 font-bold text-slate-800">
                  {product.brand || "N/A"}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-slate-400">Stock</p>
                <p className="mt-1 font-bold text-slate-800">
                  {product.stock}
                </p>
              </div>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="mt-8 rounded-xl bg-indigo-600 px-6 py-4 font-bold text-white transition hover:bg-indigo-700"
            >
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;