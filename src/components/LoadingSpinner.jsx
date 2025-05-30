function LoadingSpinner() {
  return (
    <div className="mt-2 mb-2 flex w-full min-w-64 flex-col items-center justify-center md:col-span-2">
      <p>Loading</p>
      <i className="fa-solid fa-spinner animate-spin p-2 text-4xl text-[#5e81ac]"></i>
    </div>
  );
}

export default LoadingSpinner;
