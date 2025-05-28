class StorageHandler {
  constructor() {
    this.emptyForm = {
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
    this.savedForm = this.loadForm();
  }

  loadForm() {
    const formString = localStorage.getItem("formData");
    return formString ? JSON.parse(formString) : this.emptyForm;
  }

  saveForm(formObj) {
    localStorage.setItem("formData", JSON.stringify(formObj));
  }
}

export default new StorageHandler();
