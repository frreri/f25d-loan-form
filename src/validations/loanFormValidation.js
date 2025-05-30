import * as Yup from "yup";

export const formSchema = Yup.object({
  fullName: Yup.string().required("Enter your name."),
  phone: Yup.string().required("Enter your phone number."),
  age: Yup.number()
    .typeError("Enter your age as a number.")
    .min(18, "We don't offer loans to minors.")
    .max(125, "Enter a valid age.")
    .required("Enter your age."),
  employed: Yup.boolean(),
  salaryOption: Yup.number()
    .min(1, "Not in the valid range.")
    .max(4, "Not in the valid range.")
    .required(
      "Not selecting an option shouldn't be possible, please stop manipulating the form.",
    ),
  amount: Yup.number()
    .typeError("Enter requested amount as a number.")
    .min(5000, "We don't offer loans of less than $5000.")
    .max(500000, "Maximum online amount: $500,000.")
    .required("Enter your requested amount."),
  reason: Yup.string().required("Please provide a reason for your loan."),
  duration: Yup.number()
    .typeError("Enter duration as a number.")
    .min(1, "Minimum payment duration is 1 year.")
    .max(25, "Maximum payment duration is 25 years.")
    .required("Please enter the duration of repayment."),
  message: Yup.string(),
});
