function ErrorMessage({ message, onRetry }) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
        !
      </div>

      <h2 className="text-lg font-bold text-red-900">
        Something went wrong
      </h2>

      <p className="mt-2 text-sm leading-6 text-red-700">
        {message}
      </p>

      <button
        onClick={onRetry}
        className="mt-6 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
      >
        Try Again
      </button>
    </div>
  );
}

export default ErrorMessage;