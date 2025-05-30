function ButtonReset({ handleReset }) {
  return (
    <button
      className="mt-2 w-full cursor-pointer rounded-sm bg-[#d08770] px-4 py-2 font-semibold hover:bg-[#b06750]"
      onClick={() => {
        const confirmReset = confirm(
          "Are you sure you want to reset the form?",
        );
        if (confirmReset) handleReset();
      }}
    >
      Reset Form
    </button>
  );
}

export default ButtonReset;
