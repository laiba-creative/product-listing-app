function Loading() {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="flex flex-col items-center gap-4">

        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />

        <p className="text-sm font-medium text-slate-500">
          Loading products...
        </p>

      </div>
    </div>
  );
}

export default Loading;