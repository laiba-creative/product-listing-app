import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const USD_TO_PKR = 276.37;

function Cart() {
  const {
    cart,
    cartCount,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  // Empty Cart
  if (cart.length === 0) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6 py-16">

        <div className="max-w-md text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-3xl">
            🛒
          </div>

          <h1 className="mt-6 text-3xl font-black text-slate-900">
            Your cart is empty
          </h1>

          <p className="mt-3 text-slate-500">
            You haven't added anything yet. Let's find something you like.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-700"
          >
            Browse Products
          </Link>

        </div>

      </section>
    );
  }

  return (
    <section className="bg-slate-50 px-6 py-12 md:py-16">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Shopping Cart
            </p>

            <h1 className="mt-2 text-4xl font-black text-slate-900">
              Your Cart
            </h1>

            <p className="mt-2 text-slate-500">
              {cartCount} {cartCount === 1 ? "item" : "items"} in your cart.
            </p>

          </div>

          <button
            onClick={clearCart}
            className="text-sm font-semibold text-red-600 hover:text-red-800"
          >
            Clear Cart
          </button>

        </div>

        {/* Cart Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_350px]">

          {/* Products */}
          <div className="space-y-4">

            {cart.map((item) => (

              <article
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >

                {/* Product Image */}
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-3">

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />

                </div>

                {/* Product Info */}
                <div className="min-w-0 flex-1">

                  <p className="text-xs font-semibold uppercase text-indigo-600">
                    {item.category}
                  </p>

                  <h2 className="mt-1 line-clamp-2 font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 font-bold text-slate-900">
                    Rs.{" "}
                    {(item.price * USD_TO_PKR).toLocaleString("en-PK", {
                      maximumFractionDigits: 0,
                    })}
                  </p>

                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">

                  <div className="flex items-center rounded-lg border border-slate-200">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-2 font-bold text-slate-600 hover:bg-slate-50"
                    >
                      −
                    </button>

                    <span className="min-w-10 text-center text-sm font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-2 font-bold text-slate-600 hover:bg-slate-50"
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm font-semibold text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>

                </div>

              </article>

            ))}

          </div>

          {/* Order Summary */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-black text-slate-900">
              Order Summary
            </h2>

            <div className="mt-6 flex justify-between border-b border-slate-200 pb-4 text-sm text-slate-500">

              <span>Items</span>

              <span>{cartCount}</span>

            </div>

            <div className="mt-4 flex justify-between text-lg font-black text-slate-900">

              <span>Total</span>

              <span>
                Rs.{" "}
                {(cartTotal * USD_TO_PKR).toLocaleString("en-PK", {
                  maximumFractionDigits: 0,
                })}
              </span>

            </div>

            <button
              onClick={() =>
                alert("Checkout demo — no payment is connected.")
              }
              className="mt-6 w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-bold text-white transition hover:bg-indigo-700"
            >
              Checkout
            </button>

            <Link
              to="/products"
              className="mt-3 block text-center text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Continue Shopping
            </Link>

          </aside>

        </div>

      </div>

    </section>
  );
}

export default Cart;