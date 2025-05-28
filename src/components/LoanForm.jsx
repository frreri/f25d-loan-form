import { useState } from "react";
import { formSchema } from "../validations/loanFormValidation";

const initialValues = {
  fullName: "",
  phone: "",
  age: "",
  employed: false,
  salaryOption: "1",
  amount: "",
  reason: "",
  duration: "",
  message: "",
};

function LoanForm() {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleValueChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCheckedChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.checked });

  const clearForm = () => {
    setFormData(initialValues);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await formSchema.validate(formData, { abortEarly: false });
      console.log("form submitted");
      clearForm();
    } catch (err) {
      const errObj = {};
      err.inner.forEach((error) => (errObj[error.path] = error.message));
      setErrors(errObj);
    }
  };

  const errorMsg = (msg) => <p className="text-sm text-red-700">{msg}</p>;

  return (
    <form
      className="rounded-md border-2 border-gray-200 bg-gray-50 p-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label>Name</label>
        <input
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleValueChange}
        />
        {errors.fullName && errorMsg(errors.fullName)}
      </div>
      <div>
        <label>Phone number</label>
        <input
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleValueChange}
        />
        {errors.phone && errorMsg(errors.phone)}
      </div>
      <div>
        <label>Age</label>
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleValueChange}
        />
        {errors.age && errorMsg(errors.age)}
      </div>
      <div>
        <label>Employed</label>
        <input
          name="employed"
          type="checkbox"
          checked={formData.employed}
          onChange={handleCheckedChange}
        />
        {errors.employed && errorMsg(errors.employed)}
      </div>
      <div>
        <label>Monthly salary</label>
        <select
          name="salaryOption"
          value={formData.salaryOption}
          onChange={handleValueChange}
        >
          <option value="1">Less than $1000</option>
          <option value="2">$1000 - $2000</option>
          <option value="3">$2001 - $5000</option>
          <option value="4">Over $5000</option>
        </select>
        {errors.salaryOption && errorMsg(errors.salaryOption)}
      </div>
      <div>
        <label>Loan amount</label>
        <input
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleValueChange}
        />
        {errors.amount && errorMsg(errors.amount)}
      </div>
      <div>
        <label>Loan reason</label>
        <input
          name="reason"
          type="text"
          value={formData.reason}
          onChange={handleValueChange}
        />
        {errors.reason && errorMsg(errors.reason)}
      </div>
      <div>
        <label>Loan duration (in years)</label>
        <input
          name="duration"
          type="number"
          value={formData.duration}
          onChange={handleValueChange}
        />
        {errors.duration && errorMsg(errors.duration)}
      </div>
      <div>
        <label>Message or additional info</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleValueChange}
        />
        {errors.message && errorMsg(errors.message)}
      </div>
      <button
        className="w-full cursor-pointer bg-green-600 px-4 py-2 hover:bg-green-700"
        type="submit"
      >
        Send request
      </button>
    </form>
  );
}

export default LoanForm;
