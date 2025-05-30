function ButtonNew({ onClick }) {
  return (
    <button
      className="mt-4 w-full cursor-pointer rounded-sm bg-[#5e81ac] px-4 py-2 font-semibold hover:bg-[#81a1c1] md:col-span-2"
      onClick={onClick}
    >
      New Request
    </button>
  );
}

export default ButtonNew;
