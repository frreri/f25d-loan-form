function InputValue({ label, name, type, onChange, data, errors }) {
  return (
    <div className="mb-2 flex min-h-14 flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        className="h-8 rounded-sm border-2 border-gray-300 bg-white p-1"
        id={name}
        name={name}
        type={type}
        autoComplete="off"
        value={data[name]}
        onChange={onChange}
      />
      {errors[name] && <p className="text-sm text-red-700">{errors[name]}</p>}
    </div>
  );
}

export default InputValue;
