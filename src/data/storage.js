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
const savedFormString = localStorage.getItem("formData");
export const savedForm = savedFormString
  ? JSON.parse(savedFormString)
  : emptyForm;
