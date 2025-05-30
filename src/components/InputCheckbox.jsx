function InputCheckbox({ label, name, onChange, data, errors }) {
  return (
    <div className="mb-2 flex min-h-14 items-center gap-2">
      <label htmlFor={name}>{label}</label>
      <span className="flex h-8 items-center">
        <input
          className="h-5 w-5"
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
