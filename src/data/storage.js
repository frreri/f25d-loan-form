export const emptyForm = {
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
const savedForm = localStorage.getItem("formData");
export const initialValues = savedForm ? JSON.parse(savedForm) : emptyForm;
