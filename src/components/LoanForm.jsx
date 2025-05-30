import { useEffect, useState } from "react";
import { formSchema } from "../validations/loanFormValidation";
import storageHandler from "../data/storage";
import InputValue from "./InputValue";
import InputCheckbox from "./InputCheckbox";
import InputSelect from "./InputSelect";
import WarningText from "./WarningText";
import LoadingSpinner from "./LoadingSpinner";
import Submitted from "./Submitted";
import ButtonSend from "./ButtonSend";
import InputTextArea from "./InputTextArea";
import ButtonReset from "./ButtonReset";
import ButtonNew from "./ButtonNew";

function LoanForm() {
  const [formData, setFormData] = useState(storageHandler.savedForm);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    storageHandler.saveForm(formData);
  }, [formData]);

  useEffect(() => {
    if (isSubmitted) {
      setIsLoading(true);
      setTimeout(() => {
        clearForm();
        setIsLoading(false);
      }, 3500);
    }
  }, [isSubmitted]);

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

      setIsSubmitted(true);
    } catch (err) {
      const errObj = {};
      err.inner.forEach((error) => (errObj[error.path] = error.message));
      setErrors(errObj);
    }
  };

  return (
    <div className="mb-2 flex flex-col rounded-md border-2 border-gray-200 bg-[#eceff4] p-4 shadow-lg">
      {!isSubmitted && (
        <>
          <h1 className="text-2xl font-bold uppercase">React Bank</h1>
          <h2 className="mb-2 text-lg">Loan Request Form</h2>
          <form
            className="grid grid-cols-1 border-t-2 border-gray-200 pt-2 md:grid-cols-2 md:gap-x-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
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
            <div className="flex flex-col">
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
                label="Loan amount (USD)"
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
            <InputTextArea
              label="Additional information"
              name="message"
              data={formData}
              onChange={handleValueChange}
              errors={errors}
            />
            {formData.salaryOption === "1" && (
              <WarningText text="A salary of less than $1000 will impact your chances of getting approved for a loan." />
            )}
            <ButtonSend />
          </form>
          <ButtonReset handleReset={clearForm} />
        </>
      )}
      {isLoading && <LoadingSpinner />}
      {!isLoading && isSubmitted && (
        <>
          <Submitted />
          <ButtonNew onClick={() => setIsSubmitted(false)} />
        </>
      )}
    </div>
  );
}

export default LoanForm;
