import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const API_URL = "https://dummyjson.com/products";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (err) {
        console.error("API Error:", err);

        setError(
          "Products could not be loaded. Please check your internet connection and try again."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Our Store
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Explore Products
          </h1>

          <p className="mt-4 max-w-2xl text-slate-500">
            Browse products from our store. Open any product to see its
            details and add it to your cart.
          </p>
        </div>

        {/* Loading */}
        {loading && <Loading />}

        {/* Error */}
        {!loading && error && (
          <ErrorMessage message={error} />
        )}

        {/* Products */}
        {!loading && !error && products.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

        {/* No Products */}
        {!loading && !error && products.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <h2 className="text-xl font-bold text-slate-900">
              No products found
            </h2>

            <p className="mt-2 text-slate-500">
              There are currently no products available.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Products;