function WarningText({ text }) {
  return (
    <div className="mx-auto mt-2 mb-4 flex w-full max-w-[310px] items-center justify-center rounded-sm border-2 border-[#d08770] bg-[#ebcb8b] px-4 py-6 md:col-span-2 md:max-w-lg">
      <p>{text}</p>
    </div>
  );
}

export default WarningText;
