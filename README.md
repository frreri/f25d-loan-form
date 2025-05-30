# F25D React assignment 3

## Loan request form

I have created a responsive loan request farm using both state and effect hooks
The following features are implemented:

- All form fields are controlled / connected to state
- Data entered is dynamically stored in localStorage so a reload does not cause loss progress
- A loading animation (mocked to 3.5s) on submission
- Success message after loading is done
- Validation with Yup, and all fields will show their respective validation error message
- Salary selection will dynamically display a warning if lowest level is selected
- Button to reset the form, which will prompt for confirmation, and only then restore form to defaults
- Submitting form also restores default values
- Success message view has a button to start a new loan request

Live preview: [Click here!](https://frreri.github.io/f25d-loan-form/)
