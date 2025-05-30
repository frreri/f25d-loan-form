function InputTextArea({ label, name, onChange, data, errors }) {
  return (
    <div className="mb-2 flex flex-col md:col-span-2">
      <label htmlFor={name}>{label}</label>
      <textarea
        className="rounded-sm border-2 border-gray-300 bg-white"
        id={name}
        name={name}
        value={data[name]}
        onChange={onChange}
      />
      {errors[name] && <p className="text-sm text-red-700">{errors[name]}</p>}
    </div>
  );
}

export default InputTextArea;
