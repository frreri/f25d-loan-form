import * as Yup from "yup";

export const formSchema = Yup.object({
  fullName: Yup.string().required("You have to enter your name."),
  phone: Yup.string().required("You have to enter a phone number."),
  age: Yup.number()
    .typeError("Your age need to be entered as a number.")
    .min(18, "We don't offer loans to minors.")
    .max(125, "Enter a valid age.")
    .required("You have to enter your age."),
  employed: Yup.boolean(),
  salaryOption: Yup.number()
    .min(1, "Not in the valid range.")
    .max(4, "Not in the valid range.")
    .required(
      "Not selecting an option shouldn't be possible, please stop manipulating the form.",
    ),
  amount: Yup.number()
    .typeError("Please enter your requested amount as a number.")
    .min(5000, "We don't offer loans of less than $5000.")
    .max(
      500000,
      "We don't process loan requests of over $500,000 through our online form.",
    )
    .required("You have to enter your requested amount."),
  reason: Yup.string().required("Please provide a reason for your loan."),
  duration: Yup.number()
    .typeError("The duration should be entered as a number.")
    .min(1, "We do not offer loans of less than 1 year payment time.")
    .max(25, "We do not offer loans of more than 25 years payment time.")
    .required("Please enter the duration of repayment."),
  message: Yup.string(),
});
