function InputSelect({ label, name, onChange, data, errors, options }) {
  return (
    <div className="mb-2 flex flex-col">
      <label htmlFor={name}>{label}</label>
      <select
        className="h-8 rounded-sm border-2 border-gray-300 bg-white p-1"
        id={name}
        name={name}
        value={data[name]}
        onChange={onChange}
      >
        {options.map((opt, i) => (
          <option value={`${i + 1}`} key={i}>
            {opt}
          </option>
        ))}
      </select>
      {errors[name] && <p className="text-sm text-red-700">{errors[name]}</p>}
    </div>
  );
}

export default InputSelect;
