function InputCheckbox({ label, name, onChange, data, errors }) {
  return (
    <div className="mb-2 flex flex-col">
      <label htmlFor={name}>{label}</label>
      <span className="h-8">
        <input
          className="form-check"
          id={name}
          name={name}
          type="checkbox"
          checked={data[name]}
          onChange={onChange}
        />
      </span>
      {errors[name] && <p className="text-sm text-red-700">{errors[name]}</p>}
    </div>
  );
}

export default InputCheckbox;
