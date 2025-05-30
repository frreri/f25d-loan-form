import { useEffect, useState } from "react";
import { formSchema } from "../validations/loanFormValidation";
import storageHandler from "../data/storage";
import InputValue from "./InputValue";
import InputCheckbox from "./InputCheckbox";
import InputSelect from "./InputSelect";
import WarningText from "./WarningText";

function LoanForm() {
  const [formData, setFormData] = useState(storageHandler.savedForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    storageHandler.saveForm(formData);
  }, [formData]);

  const handleValueChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCheckedChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.checked });

  const clearForm = () => {
    setFormData(storageHandler.emptyForm);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await formSchema.validate(formData, { abortEarly: false });
      console.log("Form submitted!");
      clearForm();
    } catch (err) {
      const errObj = {};
      err.inner.forEach((error) => (errObj[error.path] = error.message));
      setErrors(errObj);
    }
  };

  return (
    <div className="mb-2 flex flex-col rounded-md border-2 border-gray-200 bg-[#eceff4] p-4 shadow-lg">
      <h1 className="text-2xl font-bold uppercase">React Bank</h1>
      <h2 className="mb-2 text-lg">Loan Request Form</h2>
      <form
        className="grid grid-cols-1 border-t-2 border-gray-200 pt-2 md:grid-cols-2 md:gap-x-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-2 flex flex-col">
          <InputValue
            label="Name"
            name="fullName"
            type="text"
            data={formData}
            onChange={handleValueChange}
            errors={errors}
          />
          <InputValue
            label="Phone number"
            name="phone"
            type="text"
            data={formData}
            onChange={handleValueChange}
            errors={errors}
          />
          <InputValue
            label="Age"
            name="age"
            type="number"
            data={formData}
            onChange={handleValueChange}
            errors={errors}
          />
          <InputCheckbox
            label="Employed?"
            name="employed"
            data={formData}
            onChange={handleCheckedChange}
            errors={errors}
          />
        </div>
        <div className="mb-2 flex flex-col">
          <InputSelect
            label="Monthly salary"
            name="salaryOption"
            data={formData}
            onChange={handleValueChange}
            errors={errors}
            options={[
              "Less than $1000",
              "$1000 - $2000",
              "$2001 - $5000",
              "Over $5000",
            ]}
          />
          <InputValue
            label="Loan amount"
            name="amount"
            type="number"
            data={formData}
            onChange={handleValueChange}
            errors={errors}
          />
          <InputValue
            label="Loan reason"
            name="reason"
            type="text"
            data={formData}
            onChange={handleValueChange}
            errors={errors}
          />
          <InputValue
            label="Loan duration (in years)"
            name="duration"
            type="number"
            data={formData}
            onChange={handleValueChange}
            errors={errors}
          />
        </div>
        <div className="mb-2 flex flex-col md:col-span-2">
          <label htmlFor="message">Additional information</label>
          <textarea
            className="rounded-sm border-2 border-gray-300 bg-white"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleValueChange}
          />
          {errors.message && (
            <p className="text-sm text-red-700">{errors.message}</p>
          )}
        </div>
        {formData.salaryOption === "1" && (
          <WarningText text="A salary of less than $1000 will impact your chances of getting approved for a loan." />
        )}
        <button
          className="w-full cursor-pointer rounded-sm bg-[#a3be8c] px-4 py-2 font-semibold hover:bg-[#839e6c] md:col-span-2"
          type="submit"
        >
          Send Request
        </button>
      </form>
      <button
        className="mt-2 w-full cursor-pointer rounded-sm bg-[#d08770] px-4 py-2 font-semibold hover:bg-[#b06750]"
        onClick={() => {
          const confirmReset = confirm(
            "Are you sure you want to reset the form?",
          );
          if (confirmReset) clearForm();
        }}
      >
        Reset Form
      </button>
    </div>
  );
}

export default LoanForm;
